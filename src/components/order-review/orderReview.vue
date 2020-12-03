<template>
    <div>
        <div class="text-center text-3xl text-bold pb-4">Checkout</div>

        <div v-if="!isLoading">
            <div class="bg-white rounded-md shadow-md p-8 mb-12">
                <h1 class="text-2xl font-semibold mb-4">Order items</h1>
                <order-items :order-items="order.items" />
            </div>

            <div class="bg-white rounded-md shadow-md p-8 mb-12">
                <h1 class="text-2xl font-semibold mb-4">Shipping & delivery</h1>
                <div class="flex flex-col md:flex-row justify-between">
                    <div>
                        <div class="font-bold">Shipping from</div>
                        <p>Latvia</p>
                    </div>
                    <address-block :address="order.shippingAddress" :title="'Shipping to'" class="pt-6 md:pt-0" />
                    <delivery-method-selector
                        :order="order"
                        @on-delivery-method-change="onDeliveryMethodChange"
                        class="pt-6 md:pt-0 md:pr-24"
                    />
                </div>
            </div>

            <div class="bg-white rounded-md shadow-md p-8 mb-12">
                <div class="md:w-1/3 mx-auto">
                    <h1 class="text-2xl font-semibold mb-4">Order summary</h1>
                    <order-breakdown :order="order" />
                    <button
                        type="button"
                        class="border bg-indigo-700 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline w-full"
                    >
                        Pay now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrderById } from '@services/orderReviewService';
import AddressBlock from '@components/order-review/addressBlock';
import OrderItems from '@components/order-review/orderItems';
import OrderBreakdown from '@components/order-review/orderBreakdown';
import { getFormattedAmount } from '@helpers/currency';
import DeliveryMethodSelector from '@components/order-review/deliveryMethodSelector';

export default {
    name: 'OrderReview',

    components: {
        AddressBlock,
        OrderItems,
        OrderBreakdown,
        DeliveryMethodSelector,
    },

    data() {
        return {
            isLoading: true,
            order: null,
        };
    },

    computed: {
        /**
         * @return {string}
         */
        grandTotal() {
            return getFormattedAmount(this.order.grandTotal, this.order.currency);
        },
    },

    mounted() {
        this.initReview();
    },

    methods: {
        initReview() {
            this.order = getOrderById(1);
            this.isLoading = false;
        },

        /**
         * @param {DeliveryMethod} selectedDeliveryMethod
         */
        onDeliveryMethodChange(selectedDeliveryMethod) {
            this.order.shipping = selectedDeliveryMethod.price;
            this.order.recalculateTotals();
        },
    },
};
</script>
