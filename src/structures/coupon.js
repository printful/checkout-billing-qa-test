export default class Coupon {
    /** @type {string} */
    code = '';

    /** @type {number} */
    value = 0;

    /** @type {boolean} */
    isInvalidInTestMode = false;

    constructor(params = {}) {
        this.code = params.code ?? '';
        this.value = params.value ?? 0;
        this.isInvalidInTestMode = params.isInvalidInTestMode ?? false;
    }
}
