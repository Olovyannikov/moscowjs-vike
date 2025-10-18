---
layout: section
---

<style>
[data-slidev-no="21"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

# Start App

```json
"dev": "tsx ./express-entry.ts",
"build": "vike build",
"start": "pnpm run build && cross-env NODE_ENV=production tsx ./express-entry.ts"
```

<v-clicks>

- Запускаем `express-entry.ts`;
- Сервер вызывает `vikeHandler`;
- Запускается наше приложение.

</v-clicks>

<v-click>
</v-click>

