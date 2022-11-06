# [Добавление дополнительного ключа в ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)

https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9

Когда вы генерируете новый приватный ключ он должен быть добавлен в SSH agent!

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. When adding your SSH key to the agent, use the default macOS ssh-add command, and not an application installed by macports, homebrew, or some other external source.

1. Start the ssh-agent in the background.

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

Depending on your environment, you may need to use a different command. For example, you may need to use root access by running sudo -s -H before starting the ssh-agent, or you may need to use exec ssh-agent bash or exec ssh-agent zsh to run the ssh-agent.

2. If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.

- First, check to see if your ~/.ssh/config file exists in the default location.

```
$ open ~/.ssh/config
> The file /Users/you/.ssh/config does not exist.
```

- If the file doesn't exist, create the file.

```
$ touch ~/.ssh/config
```

- Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Notes:
- If you chose not to add a passphrase to your key, you should omit the UseKeychain line.
- If you see a Bad configuration option: usekeychain error, add an additional line to the configuration's' Host * section.

```
Host *
IgnoreUnknown UseKeychain
```

Config might look like this

```
#activehacker account
Host github.com-activehacker
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_activehacker

#jexchan account
Host github.com-jexchan
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_jexchan
```

3. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.

```
$ ssh-add -K ~/.ssh/id_ed25519
```

4. You can check your saved keys

```
$ ssh-add -l
```


Выйти из текущей ssh-agent сессии: закройте оболочку в которой была запущена сессия.


#### Resources:
[Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)
[Using the SSH Config File](https://linuxize.com/post/using-the-ssh-config-file/)
