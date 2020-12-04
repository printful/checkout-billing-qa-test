<template>
    <div>
        <ValidationProvider ref="discountCodeProvider" v-slot="{ errors }" name="discount code">
            <div class="flex flex-row">
                <input
                    type="text"
                    name="discountCode"
                    id="discountCode"
                    v-model="discountCode"
                    :class="{ 'border-red-700': errors.length }"
                    :disabled="isInputDisabled"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2 mr-2 w-64"
                />
                <button
                    v-if="!isInputDisabled"
                    type="button"
                    class="border border-indigo-500 text-indigo-500 text-md rounded-md px-4 transition duration-500 ease hover:bg-indigo-700 hover:text-white focus:outline focus:shadow-outline w-full lg:w-auto"
                    @click="onCodeSubmit()"
                >
                    Apply
                </button>
            </div>
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
        </ValidationProvider>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { getCoupons } from '@services/orderReviewService';

export default {
    name: 'DiscountCodeInput',

    data() {
        return {
            isInputDisabled: false,
            coupons: [],
            discountCode: '',
        };
    },

    components: {
        ValidationProvider,
    },

    mounted() {
        this.coupons = getCoupons();
    },

    methods: {
        onCodeSubmit() {
            if (!this.discountCode) {
                this.$refs.discountCodeProvider.applyResult({
                    errors: ['You must enter a discount code'],
                    valid: false,
                    failedRules: {},
                });

                return;
            }

            this.$emit('on-code-submit', this.getCouponValue(this.discountCode));
        },

        /**
         * @param {string} discountCode
         * @return {number}
         */
        getCouponValue(discountCode) {
            const coupon = this.coupons.filter(coupon => {
                return coupon.code === discountCode;
            });

            if (!coupon.length) {
                return 0;
            }

            this.isInputDisabled = true;

            return coupon[0].value;
        },
    },
};
</script>
