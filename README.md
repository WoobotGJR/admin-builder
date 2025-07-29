# 🧩 Admin Builder

Модульная платформа для сборки административных интерфейсов с использованием **Next.js**, **Drizzle ORM**, **React Hook Form**, и **TypeScript**. Система построена по принципу провайдеров и схем, позволяя быстро собирать CRUD-интерфейсы на основе декларативных конфигураций.

---

## 🚀 Стек технологий

- **Next.js (App Router)**
- **TypeScript**
- **Drizzle ORM**
- **PostgreSQL**
- **React Hook Form + shadcn/ui**
- **Modular architecture / DI containers**

---

## 📦 Структура проекта

├── admin-builder/ # Ядро системы: DI контейнеры, схемы, формы, генераторы UI</br>
├── app/ # Next.js app router: страницы, layout, schemas</br>
├── components/ # UI-библиотека (на основе shadcn/ui)</br>
├── drizzle/ # SQL-миграции Drizzle ORM</br>
├── entities/ # Бизнес-логика конкретных сущностей (user, и т.д.)</br>
├── lib/ # Утилиты и общий код</br>

---

## ⚙️ Быстрый старт

### 1. Установка зависимостей

```bash
1. Установка проекта
yarn install
2. Настройка базы данных
Создай .env файл на основе .env.example:
3. Запуск dev-сервера
bash
Копировать
Редактировать
yarn dev
📁 Основные директории
admin-builder/
Ядро системы — всё, что нужно для сборки интерфейсов по декларативной схеме:

_entity-schema.ts — описание полей сущности

_upsert-entity-form.tsx — генерация формы редактирования

_entity-page.tsx — CRUD-страница

_container.ts — DI контейнер для инъекции зависимостей

_action.ts — create / update / get действия

_entity-card.tsx — отображение карточки сущности

app/admin/users/page.tsx
Реализация страницы /admin/users, с использованием сборщика из admin-builder.

entities/user/
Инкапсулированная логика конкретной сущности (user): конфигурация, серверные и клиентские методы, настройки базы.

📌 Создание новой сущности
Добавь в entities/ новую папку (product/, article/ и т.д.)

Создай:

config.ts — описание схемы

server.ts / client.ts — API

db.ts — модель таблицы

Подключи к admin-builder с помощью provider(...) и схемы

🛠 Используемые библиотеки
Next.js

Drizzle ORM

shadcn/ui

react-hook-form

TypeScript

```
