---
layout: text-image
media: ../assets/onbeforerender.png
---

<style>
    [data-slidev-no="31"] .grid {
        display:flex !important;
        div.prose {
            padding-right: 0!important;
        }
    }
</style>

# Кастомные хуки
<style>
[data-slidev-no="31"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>
<div v-click>

```ts
export async function onBeforeRender(pageContext: PageContext) {
  const { pageInitiatedOnServer } = pageContext.config;

  pageInitiatedOnServer?.(pageContext);
}
```

</div>


