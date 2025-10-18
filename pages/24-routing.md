<style>
.routing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}
.routing__right .slidev-vclick-hidden-explicitly { display: none !important; }
.routing__right .slidev-vclick-target { display: none; }
.routing__right .slidev-vclick-current { display: block; }
</style>


# Навигация
<div class="routing">

<v-clicks>
<div v-click.at="1" class="routing__left">

<v-click>

- По-умолчанию `File-Based Routing`;

</v-click>
<v-click>

- Можно переопределять `route string` <br/> или `route matching function`;

</v-click>
<v-click>

- Можно сделать полностью `client-side routing` с интеграцией `React Router/Vue Router` итд;

</v-click>

</div>

<div v-click.at="1" class="routing__right">
    <img  v-click.at="1" v-click.hide="2" src="../assets/routing-1.png" />
    <img  v-click.at="2" v-click.hide="3" src="../assets/catch-route.png" />
    <img  v-click.at="3" src="../assets/react-router.png" />
</div>
</v-clicks>
</div>

