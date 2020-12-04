export default class Coupon {
    /** @type {string} */
    code = '';

    /** @type {number} */
    value = 0;

    constructor(params = {}) {
        this.code = params.code ?? '';
        this.value = params.value ?? 0;
    }
}
