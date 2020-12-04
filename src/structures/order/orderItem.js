export default class OrderItem {
    /** @type {string} */
    name = '';

    /** @type {number} */
    quantity = 1;

    /** @type {number} */
    price = 0;

    /** @type {string} */
    size = '';

    /** @type {string} */
    color = '';

    /** @type {string} */
    brand = '';

    /** @type {string} */
    image = '';

    /**
     * Used for QA tests
     * @type {boolean}
     */
    showIncorrectCurrencySymbol = false;

    constructor(params = {}) {
        this.name = params.name ?? '';
        this.quantity = params.quantity ?? 1;
        this.price = params.price ?? 0;
        this.size = params.size ?? '';
        this.color = params.color ?? '';
        this.brand = params.brand ?? '';
        this.image = params.image ?? '';
        this.showIncorrectCurrencySymbol = params.showIncorrectCurrencySymbol ?? false;
    }
}
