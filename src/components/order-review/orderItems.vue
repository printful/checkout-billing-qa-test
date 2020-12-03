<template>
    <table class="table-auto w-full order-items">
        <thead>
            <tr>
                <th class="w-2/3 md:w-3/4 font-light text-gray-600 text-left pb-2">PRODUCT</th>
                <th class="font-light text-gray-600">QTY</th>
                <th class="font-light text-gray-600">PRICE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in orderItems" :key="index">
                <td class="flex flex-wrap py-4 border-t">
                    <img class="order-items__image" :src="getProductImagePath(item.image)" />
                    <div class="flex flex-wrap content-center sm:pl-6">
                        <div>
                            <div class="text-lg">{{ item.name }}</div>
                            <div v-if="item.brand" class="text-gray-600">Brand: {{ item.brand }}</div>
                            <div v-if="item.color" class="text-gray-600">Color: {{ item.color }}</div>
                            <div v-if="item.size" class="text-gray-600">Size: {{ item.size }}</div>
                        </div>
                    </div>
                </td>
                <td class="text-center border-t">{{ item.quantity }}</td>
                <td class="text-center border-t font-semibold">{{ getFormattedItemPrice(item.price) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { CURRENCY_USD, getCurrencySymbol } from '@helpers/currency';

export default {
    name: 'OrderItems',

    props: {
        /** @type {OrderItem[]} */
        orderItems: {
            type: Array,
            required: true,
        },
        currency: {
            type: String,
            required: false,
            default: CURRENCY_USD,
        },
    },

    methods: {
        /**
         * @return {string}
         */
        getFormattedItemPrice(price) {
            return getCurrencySymbol(this.currency) + price;
        },

        /**
         * @param {string} imageName
         * @return {string}
         */
        getProductImagePath(imageName) {
            if (!imageName) {
                return 'https://via.placeholder.com/150x150';
            }

            const images = require.context('../../assets/images/products', false, /\.png$/);
            return images('./' + imageName + '.png');
        },
    },
};
</script>

<style lang="scss" scoped>
.order-items {
    &__image {
        height: 150px;
        width: 150px;
    }
}
</style>
