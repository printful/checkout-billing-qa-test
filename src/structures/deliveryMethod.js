export const DELIVERY_METHOD_STANDARD = 'standard';
export const DELIVERY_METHOD_EXPRESS = 'express';

export default class DeliveryMethod {
    /** @type {string} */
    id = DELIVERY_METHOD_STANDARD;

    /** @type {string} */
    name = '';

    /** @type {number} */
    price = 0;

    constructor(params = {}) {
        this.id = params.id ?? DELIVERY_METHOD_STANDARD;
        this.name = params.name ?? '';
        this.price = params.price ?? 0;
    }
}
