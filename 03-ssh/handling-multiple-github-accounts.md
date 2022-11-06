# Работа с несколькими Github учетными записями на MacOS

The only way I've succeeded so far is to employ SSH.

Assuming you are new to this like me, first I'd like to share with you that your Mac has a SSH `config` file in a `.ssh` directory. The `config` file is where you draw relations of your SSH keys to each GitHub (or Bitbucket) account, and all your SSH keys generated are saved into `.ssh` directory by default. You can navigate to it by running `cd ~/.ssh` within your terminal, open the `config` file with any editor, and it should look something like this:

>```bash
  >Host *
  >  AddKeysToAgent yes
  >  UseKeyChain yes
  >  IdentityFile ~/.ssh/id_rsa
  >  ForwardAgent yes
  >```

Assuming you've got 2 github accounts, for work and play, lets get your Mac to _"register"_ them. To do that that you'll need to create SSH key pairs for each account. If you have already setup your Mac to SSH with one of them, [or check if you have one](https://help.github.com/articles/checking-for-existing-ssh-keys/), continue on with the following for the second account.

#### 1. Creating the SSH keys. For each SSH key pairs:

* run `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

* You'll be prompted: "Enter a file in which to save the key" and the suggested default filename would be `id_rsa`. This filename will be used for your SSH private and public keys so remember to make it unique, eg. `user-1`, `user-2`. This step will generate both the private and public keys, `user-1` + `user-1.pub` , `user-2` + `user-2.pub` respectively.

* [GitHub](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key) has this step in detail. We're not adding the keys to the ssh-agent.

#### 2. Register your keys to the respective GitHub accounts.


* Follow these [steps](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) to do so.

#### 3. Head back over to the SSH `config` file at `~/.ssh` and amend accordingly to:

>```bash
  >#user1 account
  >Host github.com-user1
  >    HostName github.com
  >    User git
  >    IdentityFile ~/.ssh/github-user1
  >    IdentitiesOnly yes
  >
  >#user2 account
  >Host github.com-user2
  >    HostName github.com
  >    User git
  >    IdentityFile ~/.ssh/github-user2
  >    IdentitiesOnly yes
  >```
>
> Replace `user1` or `user2` with your GitHub usernames/identification-handlers

#### 4. Go ahead to git clone your respective repository

> `git clone git@github.com-user1:user1/your-repo-name.git your-repo-name_user1`

#### 5. Configure your git identity:
* Open up local git config using `git config --local -e` and add:

>```bash
  >[user]
  >     name = user1
  >     email = user1@gmail.com
  >```

#### 6. Ensure your remote url is in the right format e.g: `git@github.com-user1:user1/your-repo-name.git your-repo-name_user1`
* You either run `git remote set-url origin git@github.com-user1:user1/your-repo-name.git your-repo-name_user1`
* Or amend your remote ssh-url in your local git config file:
> ```bash
 >  [remote "origin"] 
 >        url = git@github.com-user1:user1/your-repo-name.git
 >        fetch = +refs/heads/*:refs/remotes/origin/*
 > ```

Now you can git actions (pull/push/fetch...etc) all you like!

#### Resources:
* [Automatically use correct SSH key for remote Git repo](https://www.keybits.net/post/automatically-use-correct-ssh-key-for-remote-git-repo/)
* [StackOverFlow](https://stackoverflow.com/questions/7927750/specify-an-ssh-key-for-git-push-for-a-given-domain)
* [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)

_Special thanks to [@Jonalogy](https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9#file-handling_multiple_github_accounts-md!_
_Special thanks to [@pbuditi](https://github.com/pbuditi) for your help!_