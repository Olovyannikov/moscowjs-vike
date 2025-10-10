---
layout: text-image
media: '../assets/project-structure.png'
---

# Что еще?

<v-clicks>

- Хуки `+onPageTransitionStart` и `+onPageTransitionEnd` отвечают за трекинг перехода по страницам;
- `+Wrapper` - оборачивает всё приложение и `Layout` - обычно там определяют подключение глобальных провайдеров;
- `+onBeforeRender` и `+onBeforeRenderClient` помогут сделать что-то перед рендером на сервере и перед рендером на клиенте - например синхронизировать Store;

</v-clicks>

<Counter/>