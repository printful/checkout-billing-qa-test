<template>
    <div>
        <div class="font-bold">{{ title }}</div>

        <div class="mt-2">
            <div v-if="address.fullName">{{ address.fullName }}</div>
            <div v-if="address.address1">{{ address.address1 }}</div>
            <div v-if="address.address2">{{ address.address2 }}</div>
            <div v-if="address.city">{{ address.city }}</div>
            <div v-if="isTestMode && address.city">{{ address.city }}</div>
            <div v-if="address.country">{{ address.country }}</div>
            <div v-if="address.zip">{{ address.zip }}</div>
            <div v-if="address.phone">{{ address.phone }}</div>
        </div>
    </div>
</template>

<script>
import Address from '@structures/address';
import { isTestMode } from '@config/testConfig';

export default {
    name: 'AddressBlock',

    props: {
        address: {
            type: Address,
            required: true,
        },
        title: {
            type: String,
            required: false,
            default: '',
        },
    },

    data() {
        return {
            isTestMode,
        };
    },
};
</script>
