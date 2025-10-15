# Кастомные хуки
<style>
[data-slidev-no="23"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>
```ts {*|9|10-15}{startLine:4,lines:true}
// vike.d.ts

declare global {
    namespace Vike {
        interface PageContext {
            isMobile: boolean;
            config: {
                /** Page init event - server side */
                pageInitiatedOnServer?: <T>(ctx: PageContextServer<T>) => void;
                /** Page start event - client side */
                pageInitiatedOnClient?: <T>(ctx: PageContextClient<T>) => void;
            };
        }
    }
}
```


<Counter/>