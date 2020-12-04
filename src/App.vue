<template>
    <div id="app">
        <div id="nav" class="bg-white shadow-sm p-4">
            <router-link
                to="/"
                class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                ><ion-icon name="cart-outline"></ion-icon> Checkout</router-link
            >
        </div>

        <router-view class="container mx-auto mt-10 lg:pb-24 px-2 lg:px-32 xl:px-64" />
    </div>
</template>

<style lang="scss">
@import '@assets/scss/_variables';
@import '@assets/scss/tooltip';

html {
    background: $gray-50;
}
</style>
