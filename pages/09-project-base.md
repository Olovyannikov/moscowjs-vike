---
layout: section
---

<style>
[data-slidev-no="18"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>


# Let's begin

```ts {*|10|12,13|14-17|19,20|22,23|27}{startLine:8,lines:true}
// express-entry.ts
async function startServer() {
    const app = express();

    if (isProduction) {
        app.use(express.static(`${root}/dist/client`));
    } else {
        const { devMiddleware } = await createDevMiddleware({ root });
        app.use(devMiddleware);
    }
    
    /* Перехватываем запросы */
    app.all('*', createHandler(vikeHandler)());
    
    // Если есть RPC
    app.post('/api/todo/create', createHandler(createTodoHandler)());
    
    return app;
}
export default (await startServer());
```

