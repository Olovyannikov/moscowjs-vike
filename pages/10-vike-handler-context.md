---
layout: section
---

<style>
[data-slidev-no="14"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

# pageContext

- Содержит информацию о текущей странице:

```ts
const pageContext = {
    routeParams,
    urlOriginal,
    urlPathname,
    urlParsed: { pathname, search, hash, ... }
    headers,
    config,
    isClientSide,
    isHydration,
    ...
}
```

