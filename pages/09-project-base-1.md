---
layout: center
---

# App Starter

```json
"dev": "tsx ./express-entry.ts",

"build": "vike build",

"start": "pnpm run build && cross-env NODE_ENV=production tsx ./express-entry.ts"
```

