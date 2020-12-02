<template>
    <div>
        <order-review v-if="order" :order="order" />
    </div>
</template>

<script>
import { getOrderById } from '@services/orderReviewService';
import OrderReview from '@components/order-review/orderReview';

export default {
    name: 'Checkout',

    components: {
        OrderReview,
    },

    data() {
        return {
            order: null,
        };
    },

    mounted() {
        this.loadOrder();
    },

    methods: {
        loadOrder() {
            this.order = getOrderById(1);
        },
    },
};
</script>
