---
layout: text-image
media: ../assets/20-custom-hooks.png
---

<style>
    [data-slidev-no="21"] .grid {
        display:flex !important;
        div.prose {
            padding-right: 0!important;
        }
    }
</style>

# Кастомные хуки
<style>
[data-slidev-no="22"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>
<div v-click>

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