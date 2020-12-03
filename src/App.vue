<template>
    <div id="app" class="container mx-auto px-2 lg:px-32 xl:px-64">
        <div id="nav">
            <router-link to="/">Checkout</router-link>
        </div>

        <router-view class="pt-4" />
    </div>
</template>

<style lang="scss">
@import '@assets/scss/_variables';

html {
    background: $gray-50;
}
</style>
