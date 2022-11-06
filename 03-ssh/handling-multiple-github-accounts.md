# Работа с несколькими Github учетными записями на MacOS

Используя эту инструкцию я успешно настроил SSH доступ к разным учеткам GitHub. 

Assuming you are new to this like me, first I'd like to share with you that your Mac has a SSH `config` file in a `.ssh` directory. The `config` file is where you draw relations of your SSH keys to each GitHub (or Bitbucket) account, and all your SSH keys generated are saved into `.ssh` directory by default. You can navigate to it by running `cd ~/.ssh` within your terminal, open the `config` file with any editor, and it should look something like this:

>```bash
  >Host *
  >  AddKeysToAgent yes
  >  UseKeyChain yes
  >  IdentityFile ~/.ssh/id_rsa
  >  ForwardAgent yes
  >```

Assuming you've got 2 github accounts, for work and play, lets get your Mac to _"register"_ them. To do that that you'll need to create SSH key pairs for each account. If you have already setup your Mac to SSH with one of them, [or check if you have one](https://help.github.com/articles/checking-for-existing-ssh-keys/), continue on with the following for the second account.

## 1. Creating the SSH keys. For each SSH key pairs:

* run `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

* You'll be prompted: "Enter a file in which to save the key" and the suggested default filename would be `id_rsa`. This filename will be used for your SSH private and public keys so remember to make it unique, eg. `user-1`, `user-2`. This step will generate both the private and public keys, `user-1` + `user-1.pub` , `user-2` + `user-2.pub` respectively.

* [GitHub](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key) has this step in detail. We're not adding the keys to the ssh-agent.

## 2. Register your keys to the respective GitHub accounts.


* Follow these [steps](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) to do so.

## 3. Open SSH `config` file:

First, check to see if your `~/.ssh/config` file exists in the default location.

```
$ open ~/.ssh/config
> The file /Users/you/.ssh/config does not exist.
```

If the file doesn't exist, create the file.

```
$ touch ~/.ssh/config
```

Open your `open ~/.ssh/config` file, then modify the file to contain the following lines:

```bash
#user1 account
Host github.com-user1
    HostName github.com
    User git
    IdentityFile ~/.ssh/github-user1

#user2 account
Host github.com-user2
    HostName github.com
    User git
    IdentityFile ~/.ssh/github-user2
```

Replace `user1` and/or `user2` with your GitHub usernames/identification-handlers

## 4. Go ahead to git clone your respective repository

`git clone git@github.com-user1:user1/your-repo-name.git`

or if repository already cloned:

`git remote set-url origin git@github.com-user1:user1/your-repo-name.git`

(!) This part `github.com-user1` (host) must be equal to `Host github.com-user1` of `~/.ssh/config`


## 5. Ensure your remote url is in the right format e.g: `git@github.com-user1:user1/your-repo-name.git`

Change from your regular git repository path:

`git@github.com:user1/your-repo-name.git`

Into

`git@github.com-user1:user1/your-repo-name.git`

You need to execute command: `git remote set-url origin git@github.com-user1:user1/your-repo-name.git`

(!) This part `github.com-user1` (host) must be equal to `Host github.com-user1` of `~/.ssh/config`

## 6. Configure your local git identity (Не обязательный шаг. Потому что можно брать данные из глобального git конфига):

* Open up local git config using `git config --local -e` and add:

```bash
[user]
     name = user1
     email = user1@gmail.com
```

or

```bash
git config user.name user1
git config user.email user1@gmail.com
```

Таким образом в локальном конфиге репозитория можно поменять подпись для фиксаций.

Этот шаг нужен чтоб подписывать фиксации пользователем и почтой соответствующей учетной записи GitHub.


Now you can git actions (pull/push/fetch...etc) all you like!


## Variant 2: Specify the ssh command in the config

As of git 2.10 you can now specify the ssh command in the config so there is no need for ssh magic any longer. https://git-scm.com/docs/git-config#Documentation/git-config.txt-coresshCommand

So your git-personal.conf could look like this now.

```bash
[user]
  name = X X
  email = x@x.com
  signingkey = XXXXXXXXXX

[github]
  user = "x"

[core]
  sshCommand = "ssh -i  ~/.ssh/id_ed25519"
```

Above in one line command:

```bash
git config core.sshCommand 'ssh -i ~/.ssh/id_ed25519'
```


## Resources:
* [Using the SSH Config File](https://linuxize.com/post/using-the-ssh-config-file/)
* [StackOverFlow](https://stackoverflow.com/questions/7927750/specify-an-ssh-key-for-git-push-for-a-given-domain)
* [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
* [Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)

_Special thanks to [@Jonalogy](https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9#file-handling_multiple_github_accounts-md)!_