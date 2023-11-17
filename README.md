# Yandex.Cloud - список героев

## Доступные URL

1. `/api/info` - просто информация
2. `/api/load` - загрузка информации о героях с сайта [http://gateway.marvel.com](http://gateway.marvel.com).
3. `/api/characters` - список героев (загруженный)
4. `/api/characters?id={id}` - информация о герое с идентификатором ID

## Ссылка на Yandex.Cloud
[https://d5dpjrud9qm17cr97akg.apigw.yandexcloud.net](https://d5dpjrud9qm17cr97akg.apigw.yandexcloud.net)

## Что сделано

1. Создана облачная безсерверная функция на базе ExpressJS ([index.js](index.js)).
2. Создан API Gateway для маршрутизации URL к функции.
