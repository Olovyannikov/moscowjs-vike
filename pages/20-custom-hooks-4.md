---
layout: text-image
media: ../assets/20-custom-hooks.png
---

<style>
    [data-slidev-no="24"] .grid, [data-slidev-no="25"] .grid {
        display:flex !important;
        height: 100%;
        div.prose {
            padding-right: 0!important;
        }
    }
</style>

# Кастомные хуки
<style>
[data-slidev-no="24"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
        height: 100%;
    }
}
</style>
<div>

```ts
export async function onBeforeRender(pageContext: PageContext) {
  const { pageInitiatedOnServer } = pageContext.config;

  pageInitiatedOnServer?.(pageContext);
}
```

</div>
<div>

```ts {all}{startLine:1,lines:true}
import { PageContextServer } from "vike/types";

export const pageInitiatedOnServer = 
  (ctx?: PageContextServer) => {
    console.log(
        "Page initiated on server,", 
        "isMobile:", ctx?.isMobile
    );
};
```
</div>


<div v-click>
```ts
// server logs:

7:08:20 PM [vike][request(2)] HTTP request: /star-wars
Page initiated on server, isMobile: false
```
</div>


<Counter/>