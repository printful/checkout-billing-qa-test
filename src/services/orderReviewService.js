import orderData from '@data/orders';
import deliveryMethodsData from '@data/deliveryMethods';
import Order from '@structures/order/order';
import DeliveryMethod from '@structures/deliveryMethod';

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

/**
 * Returns an array of delivery methods from deliveryMethods.json
 * @return {DeliveryMethod[]}
 */
export function getDeliveryOptions() {
    const deliveryMethods = [];

    deliveryMethodsData.forEach(deliveryMethodDatum => {
        deliveryMethods.push(new DeliveryMethod(deliveryMethodDatum));
    });

    return deliveryMethods;
}
