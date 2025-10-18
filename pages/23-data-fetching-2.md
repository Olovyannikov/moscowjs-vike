# Запрос данных

<style>
[data-slidev-no="35"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

```tsx {*|14-15|18-19|20-23|*}{startLine: 12, lines: true}
// /pages/movies/+Page.ts
// Environment: server & client

import { useData } from 'vike-react/useData' // or vike-vue

/* ... */

// Inside any React/Vue/Solid component
const Page = () => {
    const data = useData<T>();
    const { title, release_date } = data;
    
    return (/**/)
}
```

