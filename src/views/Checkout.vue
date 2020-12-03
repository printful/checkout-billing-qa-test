<template>
    <div>
        <order-review />
    </div>
</template>

<script>
import OrderReview from '@components/order-review/orderReview';

export default {
    name: 'Checkout',

    components: {
        OrderReview,
    },
};
</script>
