import OrderItem from '@structures/order/orderItem';
import Address from '@structures/address';
import { CURRENCY_USD } from '@helpers/currency';

export default class Order {
    /** @type {number|null} */
    id = null;

    /** @type {OrderItem[]} */
    items = [];

    /** @type {Address|null} */
    shippingAddress = null;

    /** @type {Address|null} */
    billingAddress = null;

    /** @type {number} */
    tax = 0;

    /** @type {number} */
    taxPercentage = 0.21;

    /** @type {number} */
    shipping = 0;

    /** @type {number} */
    discount = 0;

    /** @type {number} */
    total = 0;

    /** @type {number} */
    grandTotal = 0;

    /** @type {string} */
    currency = CURRENCY_USD;

    /** @type {Country|null} */
    fulfillmentLocation = null;

    constructor(params = {}) {
        this.id = params.id ?? null;
        this.billingAddress = params.billingAddress ? new Address(params.billingAddress) : null;
        this.shippingAddress = params.shippingAddress ? new Address(params.shippingAddress) : null;
        this.discount = params.discount ?? 0;
        this.currency = params.currency ?? CURRENCY_USD;
        this.fulfillmentLocation = params.fulfillmentLocation ?? null;
        this.taxPercentage = params.taxPercentage ?? 0;

        if (params.items) {
            params.items.forEach(item => this.items.push(new OrderItem(item)));
        }

        this.total = this.calculateItemTotal();
        this.tax = this.total * this.taxPercentage;
        this.grandTotal = this.calculateGrandTotal();
    }

    /**
     * @return {number}
     */
    calculateGrandTotal() {
        return parseFloat(this.tax + this.shipping + this.calculateItemTotal() - this.discount).toFixed(2);
    }

    /**
     * @return {number}
     */
    calculateItemTotal() {
        let itemTotal = 0;

        this.items.forEach(item => {
            itemTotal += item.price * item.quantity;
        });

        return itemTotal;
    }

    recalculateTotals() {
        this.grandTotal = this.calculateGrandTotal();
    }
}
