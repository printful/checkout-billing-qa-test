export default class Address {
    /** @type {string} */
    fullName = '';

    /** @type {string} */
    address1 = '';

    /** @type {string} */
    address2 = '';

    /** @type {string} */
    country = '';

    /** @type {string} */
    state = '';

    /** @type {string} */
    city = '';

    /** @type {string} */
    zip = '';

    /** @type {string} */
    phone = '';

    constructor(params = {}) {
        this.fullName = params.fullName ?? '';
        this.address1 = params.address1 ?? '';
        this.address2 = params.address2 ?? '';
        this.country = params.country ?? '';
        this.state = params.state ?? '';
        this.city = params.city ?? '';
        this.zip = params.zip ?? '';
        this.phone = params.phone ?? '';
    }
}
