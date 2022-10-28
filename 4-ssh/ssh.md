# Настройка SSH доступа в аккаунт GitHub

Существует несколько способов подключения к удаленному репозиторию, например с помощью логина и пароля, но самый распространенный, которым мы и будем пользоваться это использовать SSH доступ.

SSH (Secure Shell Protocol) - это специальный криптографический протокол который устанавливает безопасное соединение, между вашим компьютером и каким-то другим компьютером в нашем случае github сервером, для обмена данными. При этом логин и пароль каждый раз вводить не нужно, соединение устанавливается на основе специально сгенерированного публичного и приватного ключа. С помощью SSH можно с одного линукса залогиниться на другой линукс сервер, а также с виндовса на другие линукс сервера. Такое соединение намного удобнее и безопаснее чем использование паролей, а также экономит время.

Для того чтобы SSH аутентификация заработала вам нужно локально на вашей машине сгенерировать публичный и приватный ключи. Приватный ключ живет только на вашем компьютере и вы его никому не передаете. Публичный ключ живет на сервере к которому вы хотите получить SSH доступ.

Настроим SSH доступ. Для начала проверим нет ли уже сгенерированного ключа, для этого в терминале вводим:

```
ls -al ~/.ssh
```

Знак ~ (тильда) означает домашнюю директорию, т.е. файлы которые относятся конкретно к вашему пользователю на данной машине.

Должен быть файл с расширением .pub, если есть то генерацию нового ключа (следующий шаг) пропускаем.

Если нет то [**генерируем новый ключ**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account), для этого вводим команду в терминале и просто везде нажимаем enter несколько раз соглашаясь со всеми дефолтными значениями:

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Параметр `-t` означает протокол создания публичного ключа. ed25519 - один из самых быстрых и в то же время безопасных алгоритмов.
- Параметр `-С` означает комментарий, чтоб вы не забыли что это за ключ и для какого ресурса он был сгенерен.

Проверяем файлы ключей:

```
ls -al ~/.ssh
```

Мы видим два файла это публичный и приватный ключи. Нас интересует содержимое файла публичного ключа. Для это воспользуемся командой 😸 кот:

```
cat ~/.ssh/id_ed25519.pub
```

Теперь нам нужно добавить ключ в GitHub, для этого копируем его в буфер, переходим в https://github.com/settings/keys и добавляем новый ключ.

Проверяем доступ:

```
ssh -T git@github.com
```

Доступ установлен, отлично. Приготовления закончили, переходим к самому интересному.




## [Добавление дополнительного ключа в ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)

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