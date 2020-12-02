<template>
    <div>
        <div class="bg-white rounded-md shadow-md p-8 mb-12">
            <h1 class="text-2xl font-semibold mb-4">Order summary</h1>
            <order-items :order-items="order.items" />
        </div>

        <div class="bg-white rounded-md shadow-md p-8 mb-12">
            <h1 class="text-2xl font-semibold mb-4">Shipping</h1>
            <address-block :address="order.shippingAddress" :title="'Shipping to'" />
        </div>

        <div class="bg-white rounded-md shadow-md p-8 mb-12">
            <h1 class="text-2xl font-semibold mb-4">Order breakdown</h1>
            <order-breakdown />
        </div>
    </div>
</template>

<script>
import Order from '@structures/order/order';
import AddressBlock from '@components/order-review/addressBlock';
import OrderItems from '@components/order-review/orderItems';
import OrderBreakdown from '@components/order-review/orderBreakdown';
import { getCurrencySymbol } from '@helpers/currency';

export default {
    name: 'OrderReview',

    components: {
        AddressBlock,
        OrderItems,
        OrderBreakdown,
    },

    props: {
        order: {
            type: Order,
            required: true,
        },
    },

    computed: {
        /**
         * @return {string}
         */
        grandTotal() {
            return getCurrencySymbol(this.order.currency) + this.order.grandTotal;
        },
    },
};
</script>
