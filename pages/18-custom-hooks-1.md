# Кастомные хуки
<style>
[data-slidev-no="19"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>
```ts {*|7|9-12|13-16|*}{startLine:4,lines:true}
// pages/+config.ts
 
export default {
    ...config,
    meta: {
        // Event - fires on server side when the page gets initiated
        pageInitiatedOnServer: {
            env: { client: false, server: true },
        },
        // Event - fires on client side when the page started
        pageStartedOnClient: {
            env: { client: true, server: false },
        },
    },
}
```


<Counter/>