# Требования:

1. **Понимание как открыть терминал в Mac или Linux или Windows** (PowerShell или Git Bash).

   Если вы работаете на Windows, рекомендую использовать оболочку Git Bash. Она полностью эмулирует команды линукса, что намного удобнее при работе с git чем PowerShell.

   Оболочка Git Bash включена в пакет Git для Windows, который можно установить по ссылке из следующего пункта.

2. **Установленный GIT.** Что бы проверить установлен ли GIT, вводим команду в терминале:
    ```
    git --version
    ```
   Должно вывести что-то типа:
    ```
    git version 2.24.3 (Apple Git-128)
    ```
   Если не вывело то **установи GIT перейдя по ссылке**: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

3. **Глобальная настройка GIT** делается один раз для всех проектов

   После установки, нужно указать несколько настроек по умолчанию. Выполните в консоли:

    ```
    git config --global user.name "Harry Potter"
    ```

   Данная команда установит имя пользователя которым будут подписываться все фиксации (commits), о них дальше подробно. Оно может быть абсолютно любым и вовсе не обязательно чтоб оно совпадало с именем вашего аккаунта в удаленном репозитории.

   Флаг `--global` означает что данная настройка примениться глобально и будет работать для всех репозиториев которые вы склонируете или создадите локально.

    ```
    git config --global user.email your-email@example.com
    ```
   
   Устанавливаем глобально почту, также можно написать любую, не связанную с вашей учетной записью в удаленном репозитории. Данная настройка будет использоваться только в качестве вашей подписи в фиксациях, она не используется для логина в учетную запись.

    ```
    git config --global pull.rebase false
    ```

   Указываем глобально стратегию слияния веток по умолчанию при выполнении команды `git pull`. В данном случае будет стратегия `merge`.

   Поменяем название главной ветки по умолчанию на `main`

   ```
   git config --global init.defaultBranch main
   ```
   
   Раньше главную ветку в проекте называли `master`, вы можете встретить это названия во многих проектах.

4. **Аккаунт в https://github.com**. Подразумевается, что он у вас уже есть, если нет то зарегистрируйтесь.
5. **Настроенный SSH доступ в аккаунт GitHub.** Что бы проверить доступ, вводим команду в терминале:
    ```
    ssh -T your-email@github.com
    ```
   Если доступ установлен то выдаст следующее:
    ```
    > Hi username! You've successfully authenticated, but GitHub does not 
    > provide shell access.
    ```
   Если нет то переходим к следующему шагу.

