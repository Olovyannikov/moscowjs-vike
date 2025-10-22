---
layout: center
---

<style>
[data-slidev-no="17"] {
    .slidev-code-wrapper {
        width: fit-content;
        max-width: 100%;
    }
}
</style>

# App Starter

```json
"dev": "tsx ./express-entry.ts",

"build": "vike build",

"start": "pnpm run build && cross-env NODE_ENV=production tsx ./express-entry.ts"
```

