<template>
    <div class="text-center">
        <span class="text-lg text-gray-500 mr-2" v-tooltip="tooltip">Test order:</span>
        <button
            v-for="orderId in orders"
            :key="orderId"
            type="button"
            class="text-gray-500 text-lg rounded-md transition duration-500 px-2 ease hover:bg-indigo-700 hover:text-white focus:outline focus:shadow-outline mr-2"
            :class="{ 'font-semibold': orderId === selectedOrderId }"
            @click="onOrderSelect(orderId)"
        >
            Order #{{ orderId }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'OrderSelector',

    data() {
        return {
            orders: [1, 2],
            selectedOrderId: 1,
        };
    },

    computed: {
        /**
         * @return {string}
         */
        tooltip() {
            return {
                content: 'Switch between test orders',
                delay: { hide: 500 },
            };
        },
    },

    methods: {
        /**
         * @param {number} orderId
         */
        onOrderSelect(orderId) {
            if (orderId !== this.selectedOrderId) {
                this.selectedOrderId = orderId;
                this.$emit('on-order-selected', orderId);
            }
        },
    },
};
</script>
