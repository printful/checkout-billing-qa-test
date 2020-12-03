<template>
    <div class="my-4">
        <div class="max-w-xl mx-auto my-4 pb-4">
            <div class="flex pb-3">
                <div class="flex-1">
                    <div class="w-10 h-10 rounded-full bg-blue-400 mx-auto flex items-center">
                        <span class="text-white w-full">
                            <div class="text-center" style="line-height: 50%">
                                <ion-icon name="checkmark-outline" size="large"></ion-icon>
                            </div>
                        </span>
                    </div>
                </div>

                <div class="w-1/4 align-center items-center align-middle content-center flex">
                    <div class="w-full rounded items-center align-middle align-center flex-1">
                        <div class="bg-blue-300 text-xs leading-none py-1 rounded w-full"></div>
                    </div>
                </div>

                <div class="flex-1">
                    <div
                        class="w-10 h-10 rounded-full bg-blue-400 border-2 border-grey-light mx-auto text-lg text-white flex items-center"
                    >
                        <div style="line-height: 50%">
                            <ion-icon name="checkmark-outline" size="large"></ion-icon>
                        </div>
                    </div>
                </div>

                <div class="w-1/4 align-center items-center align-middle content-center flex">
                    <div class="w-full rounded items-center align-middle align-center flex-1">
                        <div class="bg-blue-300 text-xs leading-none py-1 rounded w-full"></div>
                    </div>
                </div>

                <div class="flex-1">
                    <div class="w-10 h-10 bg-white border-2 border-blue-100 mx-auto rounded-full flex items-center">
                        <span class="text-gray-700 text-center text-lg w-full font-semibold">3</span>
                    </div>
                </div>
            </div>

            <div class="flex text-sm font-semibold content-center text-center">
                <div class="w-1/6">
                    Products
                </div>

                <div class="w-4/6">
                    Shipping
                </div>

                <div class="w-1/6">
                    Review Order
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutSteps',
};
</script>
