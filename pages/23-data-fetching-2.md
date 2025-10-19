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

<v-clicks>

```tsx {*}{startLine: 12, lines: true}
// /pages/movies/+Page.vue

<script lang="ts" setup>
    import type { Data } from './+data'
    import { useData } from 'vike-vue/useData'
    const movie = useData<Data>()
</script>

<template>
    <h1>{{ movie.title }}</h1>
    Release Date: {{ movie.release_date }}
    <br />
    Director: {{ movie.director }}
    <br />
    Producer: {{ movie.producer }}
</template>

```

</v-clicks>