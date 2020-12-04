<template>
    <div>
        <div v-if="order.total" class="flex justify-between font-medium py-1">
            <div>Subtotal</div>
            <div class="font-bold">{{ getAmount(order.total) }}</div>
        </div>

        <hr class="pb-2 mt-2" />

        <div v-if="order.shipping" class="flex justify-between font-medium text-gray-700 py-1">
            <div>Shipping</div>
            <div class="font-bold">{{ getAmount(order.shipping) }}</div>
        </div>

        <div v-if="order.tax" class="flex justify-between font-medium text-gray-700 py-1">
            <div>TAX</div>
            <div class="font-bold">{{ getAmount(order.tax) }}</div>
        </div>

        <div v-if="order.discount" class="flex justify-between font-medium text-green-600 py-1">
            <div>Discount</div>
            <div class="font-bold">-{{ getAmount(order.discount) }}</div>
        </div>

        <hr class="pb-2 mt-2" />

        <div v-if="order.grandTotal" class="flex justify-between text-xl font-semibold py-1">
            <div>Total</div>
            <div>{{ getAmount(order.grandTotal, order) }}</div>
        </div>
    </div>
</template>

<script>
import Order from '@structures/order/order';
import { getFormattedAmount } from '@helpers/currency';

export default {
    name: 'OrderBreakdown',

    props: {
        order: {
            type: Order,
            required: true,
        },
    },

    methods: {
        /**
         * @param {number} amount
         * @return {string}
         */
        getAmount(amount) {
            return getFormattedAmount(amount, this.order.currency);
        },
    },
};
</script>
