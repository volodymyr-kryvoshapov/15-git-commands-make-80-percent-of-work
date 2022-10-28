# Реализуем вторую фичу 'words-count' + PR:

Чтобы создать вторую фичу нам нужно создать новую ветку на основе `main` но мы не можем сейчас этого сделать т.к. локальная ветка `main` отличается от `main` на удаленном сервере. Потому что PR был смерджен на удаленном сервере и локальная ветка об этом пока ничего не знает. Убедимся в этом выполнив:

```
git log
```

Мы видим что локально только 3 комита, а должно быть 6. Затяним изменения из удаленного сервера в локальную ветку, для этого выполним:

```
git pull
```

Данная команда скачивает изменения в текущей ветке и меняет локальные файлы.

Все теперь ветка `main` актуальна и мы можем на ее основе создать ветку для новой фичи.

```
git checkout -b "words-count"
```

Создаем ветку на основе main (master) и сразу переключаемся на нее.

Добавим файлы с кодом:

~/Projects/front-end-pro/words-count/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Words calc</title>
  <script src="index.js" async></script>
</head>
<body>
<h1>Words calc</h1>
</body>
</html>
```

~/Projects/front-end-pro/words-count/index.js

```html
/**
* Count number of words in sentence
*
* @param {string} str
* @returns {number}
*/
function wordsCount(str) {
return str.split(' ').length;
}

console.assert(wordsCount('Hello World!') === 2);
```

Добавим изменения в индекс:

```
git add .
```

Закоммитим:

```
git commit -m "Words Counter feature"
```

Пушим в удаленный репозиторий:

```
git push
```

Теперь:
- Создаем PR в GIT
- Скидываем ссылку на ревью
- Мерджим после успешного прохождения
- Локально переключаемся в main и подтягиваем последние изменения
- Ветку удалять не будем в этот раз