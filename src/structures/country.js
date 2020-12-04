export default class Country {
    /** @type {string} */
    id = '';

    /** @type {string} */
    name = '';

    constructor(params = {}) {
        this.id = params.id ?? '';
        this.name = params.name ?? '';
    }
}
