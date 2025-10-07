# ⚡ Match - Профессиональный нетворкинг

Место где таланты находят друг друга. Приложение для поиска команды мечты для создания проектов.

![Match App Preview](public/match-icon.svg)

## 🚀 Особенности

- **Swipe-интерфейс** как в Tinder, но для профессионалов
- **Smart matching** на основе навыков и интересов
- **PWA** - работает как нативное приложение
- **Адаптивный дизайн** для всех устройств
- **Темная тема** в стиле Revolut
- **Чат** для общения с matches
- **Профили** с навыками, опытом и портфолио

## 🛠 Технологии

- **Frontend**: React 19 + TypeScript
- **Стилизация**: CSS3 с современными фичами
- **Сборщик**: Vite 6
- **PWA**: Service Worker + Web Manifest
- **Линтинг**: ESLint + TypeScript ESLint

## 📱 Установка и запуск

### Требования
- Node.js 18+ 
- npm или yarn

### Локальная разработка

```bash
# Клонируйте репозиторий
git clone [your-repo-url]
cd Match_app

# Установите зависимости
npm install

# Запустите dev сервер
npm run dev

# Приложение откроется на http://localhost:5174
```

### Сборка для продакшена

```bash
# Создать production сборку
npm run build

# Предварительный просмотр production сборки
npm run preview
```

### Проверка качества кода

```bash
# Запустить ESLint
npx eslint .

# Проверить TypeScript типы
npx tsc --noEmit
```

## 📂 Структура проекта

```
Match_app/
├── public/                 # Статические файлы PWA
│   ├── manifest.json      # Web App Manifest
│   ├── sw.js             # Service Worker
│   ├── favicon.svg       # Фавикон
│   └── match-icon.svg    # Иконка приложения
├── src/
│   ├── App.tsx           # Главный компонент
│   ├── App.css          # Стили приложения
│   ├── main.tsx         # Точка входа
│   └── index.css        # Глобальные стили
├── index.html           # HTML шаблон
├── package.json         # Зависимости и скрипты
├── vite.config.ts      # Конфигурация Vite
├── tsconfig.json       # Конфигурация TypeScript
└── eslint.config.js    # Конфигурация ESLint
```

## 🎯 Использование

### Экраны приложения

1. **Welcome Screen** - Стартовая страница с презентацией
2. **Registration** - 4-шаговая регистрация пользователя
3. **Discover** - Swipe-карточки для поиска совпадений
4. **Matches** - Список всех совпадений
5. **Chat** - Мессенджер для общения
6. **Profile** - Профиль пользователя

### Swipe-функциональность

- **Swipe вправо** или кнопка ⚡ - лайк
- **Swipe влево** или кнопка ✕ - пропуск
- **Tap по карточке** - подробная информация
- **Super Like** ⭐ - особый лайк

### PWA функции

- **Offline работа** через Service Worker
- **Установка на домашний экран**
- **Push уведомления** (в разработке)
- **Адаптивный дизайн**

## 🎨 UI/UX

Дизайн вдохновлен:
- **Revolut** - чистый интерфейс и градиенты
- **Tinder** - swipe-механика
- **Linear** - современная типографика

### Цветовая палитра

```css
/* Основные цвета */
--primary: #6366F1
--secondary: #8B5CF6
--background: #0D0D0D
--surface: rgba(255, 255, 255, 0.02)

/* Градиенты */
--gradient-primary: linear-gradient(135deg, #6366F1, #8B5CF6)
--gradient-surface: linear-gradient(135deg, #0D0D0D, #1A1A1A)
```

## 🔧 Конфигурация

### Vite настройки
- HMR для быстрой разработки
- Автоматическая оптимизация
- TypeScript поддержка

### TypeScript
- Строгая типизация
- React 19 типы
- Никаких `any` типов

### ESLint правила
- React Hooks правила
- TypeScript рекомендации  
- Автоматическое исправление

## 📱 PWA манифест

```json
{
  "name": "Match - Профессиональный нетворкинг",
  "short_name": "Match",
  "display": "standalone",
  "theme_color": "#6366F1",
  "background_color": "#0D0D0D"
}
```

## 🚀 Деплой

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Загрузите dist/ папку
```

### GitHub Pages
```bash
npm run build
# Настройте GitHub Actions
```

## ✅ Исправленные проблемы

- ✅ **TypeScript ошибки** - исправлены все неиспользуемые переменные
- ✅ **Vite версия** - обновлен до стабильной версии 6.3.6
- ✅ **ESLint** - все ошибки исправлены, код проходит проверку
- ✅ **PWA** - корректные манифест и Service Worker
- ✅ **Зависимости** - все совместимы и актуальны
- ✅ **Сборка** - проект успешно собирается без ошибок

## 🤝 Контрибуция

1. Форкните проект
2. Создайте feature ветку (`git checkout -b feature/amazing-feature`)
3. Коммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Пушьте в ветку (`git push origin feature/amazing-feature`)
5. Создайте Pull Request

## 📄 Лицензия

Этот проект использует MIT лицензию. Смотрите `LICENSE` для деталей.

## 👥 Команда

- **Frontend**: React + TypeScript
- **Design**: CSS3 + Modern UI
- **PWA**: Service Worker + Manifest

---

Сделано с ❤️ для профессиональных команд