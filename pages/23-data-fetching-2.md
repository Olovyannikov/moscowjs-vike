# Запрос данных

<style>
[data-slidev-no="35"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

```tsx {none|*|14-15|17-19|20-23|*}{startLine: 12, lines: true, at: 1}
// /pages/movies/+Page.tsx

import { useData } from 'vike-react/useData' // or vike-vue

export default function Page() {
    const data = useData<T>();
    const { title, release_date } = data;
    
    return <h1>{ title }</h1>
}
```

<v-click at="6">

```vue {none|*}{startLine: 12, lines: true, at: 6}
// /pages/movies/+Page.vue

<script lang="ts" setup>
    import { useData } from 'vike-vue/useData';
    const movie = useData<T>();
</script>

<template>
    <h1>{{ movie.title }}</h1>
</template>

```

</v-click>