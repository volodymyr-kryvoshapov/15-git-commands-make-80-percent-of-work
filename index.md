# 15 основных команд составляют 80% работы с Git.

Я бы хотел что бы мне объяснили GIT именно так в начале моей карьеры.

# Что изучаем?

- Обретение смыслов, что это вообще GIT и зачем?.
- Требования для работы с GIT.
- Настройка SSH доступа в GitHub.
- Как правильно организовать ваши проекты.
- 🍖 'Cамое мясо', непосредственно работа с GIT и удаленной репой
    - `git init`
    - `git commit`
    - Файлы .git и .gitignore
    - Создадим репозиторий в GitHub.
    - `git push`
    - `git status`
    - `git add`
    - `git log`
    - `git remote`
- ~~Съедим~~ исправим 🪲 жука
- Создадим две фичи и разберемся с Pull Request
- Научимся решать конфликты в файлах
- Дополнительные полезные команды.


## Дополнительная глобальная настройка чтоб не писать каждый раз --set-upstream:

Чтобы не преуменьшить скажу что названия локальных и удаленных веток совпадает в 110% случаев поэтому чтобы не писать каждый раз 'git push --set-upstream origin branch_name' а сразу работал 'git push' добавим конфиг:
```
git config --global branch.autosetupmerge always
```
Чтоб вернуть все в зад:
```
git config --global --unset branch.autosetupmerge
git config --list
```