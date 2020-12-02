import orderData from '@data/orders';
import Order from '@structures/order/order';

/**
 * Get order from orders.json by order ID
 * @param {number} orderId
 */
export function getOrderById(orderId) {
    const orderRaw = orderData.filter(orderData => orderData['id'] === orderId);
    if (!orderRaw) {
        return null;
    }

    return new Order(orderRaw[0]);
}
