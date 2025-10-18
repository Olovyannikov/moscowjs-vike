---
layout: section
---

<style>
[data-slidev-no="19"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

# Let's begin

```ts {*|10-13|15-19|21-29}{startLine:8,lines:true}
// vike-handler.ts
export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context) => {
    const UA = request.headers.get('user-agent');
    const device = determineLayoutTypeFromUserAgent(UA ?? '');
    const isMobile = 
        Boolean(UA?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));

    const pageContextInit = {
        ...context, ...request, isMobile, device
    };
    const pageContext = await renderPage(pageContextInit);
    const response = pageContext.httpResponse;

    const { readable, writable } = new TransformStream();

    response?.pipe(writable);

    return new Response(readable, {
        status: response?.statusCode,
        headers: response?.headers,
    });
};
```

