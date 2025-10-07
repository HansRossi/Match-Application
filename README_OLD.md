# ⚡ Match - Профессиональный нетворкинг

Революционное PWA приложение для профессионального нетворкинга в стиле Revolut. Найди свою команду для создания проектов!

## 🎯 Ключевые особенности

- 🚀 **Быстрая регистрация** - всего 4 шага без лишней бюрократии
- 💡 **Умный поиск** - находи людей по навыкам и интересам
- ⚡ **Instant Match** - система мгновенных совпадений
- 💬 **Встроенный чат** - общайся с найденными специалистами
- 📱 **PWA Ready** - устанавливается как нативное приложение
- 🎨 **Revolut Design** - минималистичный и стильный интерфейс

## 🎭 Для кого это приложение?

- 👨‍💻 **Разработчики** - Python, JavaScript, Java, Go и др.
- 🎨 **Дизайнеры** - UI/UX, графический дизайн, продуктовый дизайн
- 📊 **Аналитики** - Data Science, ML, бизнес-аналитика
- 📱 **Product-менеджеры** - создание и развитие продуктов
- 🎓 **Студенты** - изучающие программирование, дизайн, маркетинг
- 🚀 **Энтузиасты** - все, кто хочет создавать крутые проекты

## ✨ Функциональность

### � Регистрация (4 шага)
1. **Базовая информация** - имя, возраст, город, аватар
2. **Твои навыки** - выбери что умеешь из 50+ вариантов
3. **Интересы** - что хочешь изучать или с кем работать
4. **О себе** - краткое био, опыт, ссылки на GitHub

### 🔍 Поиск и Match
- Просматривай профили других пользователей
- Смотри навыки, опыт и проекты
- Лайкай интересных людей
- Получай мгновенные уведомления о совпадениях

### 💬 Общение
- Персональные чаты с каждым match
- Обмен идеями и планирование проектов
- Возможность делиться ссылками и файлами

### 👤 Профиль
- Редактирование информации о себе
- Управление навыками и интересами
- Просмотр статистики совпадений

## � Запуск приложения

### Для разработки:
```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Для доступа с мобильных устройств
npm run dev -- --host
```

### Для продакшена:
```bash
# Сборка проекта
npm run build

# Предпросмотр сборки
npm run preview
```

## 📱 Установка как PWA

### На iPhone:
1. Открой в Safari: `http://192.168.1.12:5173/`
2. Нажми "Поделиться" → "Добавить на экран Домой"

### На Android:
1. Открой в Chrome: `http://192.168.1.12:5173/`
2. Нажми "Добавить на главный экран" или используй кнопку установки

## 🛠 Технический стек

- **Frontend**: React 19 + TypeScript
- **Сборщик**: Vite (с Rolldown)
- **Стили**: CSS3 с градиентами и анимациями
- **PWA**: Service Worker + Web Manifest
- **Дизайн**: Revolut-inspired UI/UX
- **Мобильность**: Responsive design + Touch gestures

## 🎨 Дизайн-система

Вдохновлен дизайном Revolut:
- **Цвета**: Темная тема с фиолетовыми акцентами (#6366F1, #8B5CF6)
- **Типографика**: San Francisco / Segoe UI
- **Компоненты**: Скругленные углы, стеклянные эффекты, градиенты
- **Анимации**: Плавные переходы и микро-взаимодействия
- **Сетка**: Mobile-first подход с адаптивной версткой

## 📊 Архитектура

```
src/
├── App.tsx           # Главный компонент с роутингом
├── App.css          # Стили Revolut-дизайна  
├── main.tsx         # Точка входа + SW регистрация
└── index.css        # Глобальные стили

public/
├── manifest.json    # PWA манифест
├── sw.js           # Service Worker для офлайн работы
└── vite.svg        # Иконка приложения
```

## 🚧 Roadmap

- [ ] **Уведомления** - Push notifications для новых совпадений
- [ ] **Геолокация** - поиск людей поблизости
- [ ] **Проекты** - создание и поиск команд для проектов
- [ ] **Видеозвонки** - интеграция с WebRTC
- [ ] **Портфолио** - загрузка работ и кейсов
- [ ] **Мероприятия** - хакатоны, митапы, воркшопы
- [ ] **Реферальная система** - приглашение друзей
- [ ] **Премиум функции** - расширенный поиск и аналитика

## 💎 Особенности кода

- **3000+ строк** качественного TypeScript кода
- **Полностью типизированный** интерфейс
- **Компонентная архитектура** с переиспользуемыми элементами
- **Состояние приложения** управляется через React useState
- **Адаптивная верстка** для всех устройств
- **Производительность** оптимизирована для мобильных устройств

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Match-Application
