---
layout: section
---
<style>
[data-slidev-no="15"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

# +config.ts

```ts {*|4|7-11|13-15|17-20|22-23}{startLine: 4,lines: true}
// Default config (can be overridden by pages)
export default {
    // base options
    extends: [vikeReact], // vikeVue, vikeReactQuery etc...
    reactStrictMode: false,
    cacheControl: "public, max-age=86400",
    prefetchStaticAssets: "viewport",
    ssr: true, // true by default
    
    // Wrappers
    Layout: RootLayout, // Layout всего приложения
    Head: HeadDefault, // Дефолтный <head />
    
    // meta tags
    lang: "en",
    title: "My Vike App",
    description: "Demo showcasing Vike",
    
    // meta info
    passToClient: ['scopeValues', 'device', 'isMobile'],

} satisfies Config;
```

<Counter/>