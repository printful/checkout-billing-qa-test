<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="lg:pr-8 flex flex-col space-y-4">
            <div class="flex flex-col items-stretch space-y-1">
                <label for="fullName">Full name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    v-model="address.fullName"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>

            <div class="flex flex-col items-stretch space-y-1">
                <label for="address1">Address line 1</label>
                <input
                    type="text"
                    name="address1"
                    id="address1"
                    v-model="address.address1"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>

            <div class="flex flex-col items-stretch space-y-1">
                <label for="address2">Address line 2</label>
                <input
                    type="text"
                    name="address2"
                    id="address2"
                    v-model="address.address2"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>

            <div class="flex flex-col items-stretch space-y-1">
                <label for="country">Country</label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    v-model="address.country"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>

            <div class="flex flex-col items-stretch space-y-1">
                <label for="state">State</label>
                <input
                    type="text"
                    name="state"
                    id="state"
                    v-model="address.state"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>
        </div>

        <div class="lg:pr-8 flex flex-col space-y-4">
            <div class="grid grid-cols-2 gap-x-4">
                <div class="flex flex-col space-y-1">
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        v-model="address.city"
                        class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                    />
                </div>

                <div class="flex flex-col space-y-1">
                    <label for="zip">ZIP</label>
                    <input
                        type="text"
                        name="zip"
                        id="zip"
                        v-model="address.zip"
                        class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                    />
                </div>
            </div>

            <div class="flex flex-col items-stretch space-y-1">
                <label for="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    v-model="address.phone"
                    class="h-10 border rounded-md border-gray-300 hover:shadow p-2"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Address from '@structures/address';

export default {
    name: 'AddressForm',

    data() {
        return {
            address: new Address(),
        };
    },

    watch: {
        address: {
            deep: true,

            /**
             * @param {Address} newAddress
             */
            handler(newAddress) {
                this.$emit('on-address-change', newAddress);
            },
        },
    },
};
</script>
