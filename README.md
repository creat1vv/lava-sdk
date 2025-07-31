# 🔥 lava-sdk

[![npm version](https://img.shields.io/npm/v/lava-sdk?color=blue&style=flat-square)](https://www.npmjs.com/package/lava-sdk)
[![npm downloads](https://img.shields.io/npm/dm/lava-sdk?style=flat-square)](https://www.npmjs.com/package/lava-sdk)
[![license](https://img.shields.io/npm/l/lava-sdk?style=flat-square)](LICENSE)

> **SDK для интеграции с [Lava Business](https://lava.ru) в Node.js**

---

## ✨ Возможности

- 💸 Создание и управление счетами (invoice)
- ♻️ Рекуррентные платежи
- 💰 Запросы на вывод (payoff)
- 🏬 Информация о магазине
- ✅ Проверка статуса операций
- 🔐 Подписи запросов (HMAC SHA-256)

## 📦 Установка

```bash
npm install lava-sdk
# или
yarn add lava-sdk
# или
bun add lava-sdk
```

## 🚀 Быстрый старт

```javascript
import { LavaSDK } from 'lava-sdk'

const sdk = new LavaSDK({
	shopId: 'ваш-shopId',
	secretKey: 'ваш-secretKey',
})

// Пример: создание счёта для оплаты
const invoice = await sdk.invoice.create({
	sum: 100,
	orderId: 'order-123',
	successUrl: 'https://site.com/success',
	failUrl: 'https://site.com/fail',
	hookUrl: 'https://site.com/webhook',
	comment: 'Тестовый счёт',
})
```

## 📘 Документация

```bash
new LavaSDK(options)
```

| Параметр  | Тип    | Описание                                                                 |
| --------- | ------ | ------------------------------------------------------------------------ |
| shopId    | String | Ваш ID проекта в бизнес кабинете                                         |
| secretKey | String | Секретный ключ выпущенный в настройках проекта                           |
| baseUrl?  | String | Базовый URL API (опционально, по умолчанию https://api.lava.ru/business) |

## 📃 Ресурсы

- [Примеры](https://github.com/creat1vv/lava-sdk/tree/main/examples)
