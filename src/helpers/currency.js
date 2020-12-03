// Currencies
export const CURRENCY_USD = 'USD';

// Currency symbols
export const CURRENCY_SYMBOL_USD = '$';

export const CURRENCY_SYMBOL_MAPPING = {
    [CURRENCY_USD]: CURRENCY_SYMBOL_USD,
};

/**
 * @param {string} currency
 */
export function getCurrencySymbol(currency) {
    return CURRENCY_SYMBOL_MAPPING[currency] ? CURRENCY_SYMBOL_MAPPING[currency] : CURRENCY_SYMBOL_USD;
}

/**
 * Return formatted amount for display
 * @param {number} amount
 * @param {string} currency
 */
export function getFormattedAmount(amount, currency) {
    return getCurrencySymbol(currency) + parseFloat(amount).toFixed(2);
}
