
<style>
[data-slidev-no="19"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

# passToClient

```ts {*|7-14}{startLine: 4, lines: true}
// pages/index/+Page.tsx
import { usePageContext } from "vike-react/usePageContext";

export default function IndexPage() {
    const { isMobile } = usePageContext();
    console.log(isMobile); // false
    
    return (/**/)
};
```

<Counter/>