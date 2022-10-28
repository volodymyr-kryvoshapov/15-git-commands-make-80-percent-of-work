# Требования:

1. **Понимание как открыть терминал в Mac или Linux или Windows** (PowerShell или Git Bash).
2. **Установленный GIT.** Что бы проверить установлен ли GIT, вводим команду в терминале:
    ```
    git --version
    ```
   Должно вывести что-то типа:
    ```
    git version 2.24.3 (Apple Git-128)
    ```
   Если не вывело то установи GIT перейдя по ссылке: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

   После установки, если вы этого еще не делали, нужно настроить данные которыми будем подписывать все коммиты (это делается глобально, один раз для всех проектов). Выполните в консоли:
    ```
    git config --global user.name "Harry Potter"
    git config --global user.email your_email@example.com
    ```
3. **Аккаунт в https://github.com**. Подразумевается, что он у вас уже есть, если нет то зарегистрируйтесь.
4. **Настроенный SSH доступ в аккаунт GitHub.** Что бы проверить доступ, вводим команду в терминале:
    ```
    ssh -T your-email@github.com
    ```
   Если доступ установлен то выдаст следующее:
    ```
    > Hi username! You've successfully authenticated, but GitHub does not 
    > provide shell access.
    ```
   Если нет то переходим к следующему шагу.

