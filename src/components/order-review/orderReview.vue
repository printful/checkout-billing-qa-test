<template>
    <div>
        <checkout-steps />

        <div v-if="!isLoading">
            <div class="bg-white rounded-md shadow-md px-8 mb-12 py-12">
                <h1 class="text-2xl font-semibold mb-4">Order items</h1>
                <order-items :order-items="order.items" />
            </div>

            <div class="bg-white rounded-md shadow-md px-8 mb-12 py-12">
                <h1 class="text-2xl font-semibold mb-4">Discount</h1>
                <discount-code-input @on-code-submit="onDiscountCodeSubmit" />
            </div>

            <div class="bg-white rounded-md shadow-md px-8 mb-12 py-12">
                <h1 class="text-2xl font-semibold mb-4">Shipping & delivery</h1>
                <div class="flex flex-col md:flex-row justify-between">
                    <div>
                        <div class="font-bold mb-2">Shipping from</div>
                        <div class="flex content-center">
                            <div class="mr-1">
                                <country-flag :country="order.fulfillmentLocation.id" size="small" class="my-auto" />
                            </div>
                            <div>
                                <span>{{ order.fulfillmentLocation.name }}</span>
                            </div>
                        </div>
                    </div>
                    <address-block :address="order.shippingAddress" :title="'Shipping to'" class="pt-6 md:pt-0" />
                    <delivery-method-selector
                        :order="order"
                        @on-delivery-method-change="onDeliveryMethodChange"
                        class="pt-6 md:pt-0 md:pr-24"
                    />
                </div>
            </div>

            <div class="bg-white rounded-md shadow-md px-8 mb-12 py-12">
                <h1 class="text-2xl font-semibold mb-4">Payment</h1>
                <h1 class="text-lg font-semibold mb-4">Billing address</h1>

                <address-form @on-address-change="order.billingAddress = $event" />
            </div>

            <div class="bg-white rounded-md shadow-md px-8 mb-12 py-12">
                <div class="md:w-1/3 mx-auto">
                    <h1 class="text-2xl font-semibold mb-4">Order summary</h1>
                    <order-breakdown :order="order" class="mt-6" />
                    <div class="mb-4">
                        <label class="inline-flex items-center mt-3 cursor-pointer">
                            <input type="checkbox" v-model="isTosChecked" class="form-checkbox h-4 w-4 text-blue-600" />
                            <div class="ml-2 text-gray-700">
                                I agree to <span class="italic">Terms of Service</span>.
                            </div>
                        </label>
                    </div>
                    <button
                        type="button"
                        class="border bg-indigo-500 text-white text-lg rounded-md px-4 py-2 mt-2 transition duration-500 ease hover:bg-indigo-700 focus:outline focus:shadow-outline w-full"
                        @click="onPayNowClick"
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
import AddressForm from '@components/common/addressForm';
import CountryFlag from 'vue-country-flag';
import CheckoutSteps from '@components/order-review/checkoutSteps';
import DiscountCodeInput from '@components/order-review/discountCodeInput.vue';

export default {
    name: 'OrderReview',

    components: {
        AddressBlock,
        OrderItems,
        OrderBreakdown,
        DeliveryMethodSelector,
        AddressForm,
        CountryFlag,
        CheckoutSteps,
        DiscountCodeInput,
    },

    data() {
        return {
            isLoading: true,
            isTosChecked: false,
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

        /**
         * @param {number} discountAmount
         */
        onDiscountCodeSubmit(discountAmount) {
            this.order.discount += discountAmount;
            this.order.recalculateTotals();
        },

        onPayNowClick() {
            alert('Nope. Nothing there');
        },
    },
};
</script>
