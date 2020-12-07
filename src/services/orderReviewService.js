import orderData from '@data/orders';
import deliveryMethodsData from '@data/deliveryMethods';
import couponData from '@data/coupons';
import Order from '@structures/order/order';
import DeliveryMethod from '@structures/deliveryMethod';
import Coupon from '@structures/coupon';

/**
 * Get order from orders.json by order ID
 * @param {number} orderId
 */
export function getOrderById(orderId) {
    const orderRaw = orderData.filter(orderData => orderData['id'] === orderId);
    if (!orderRaw) {
        return null;
    }

    console.log('Super secret stuff that should not be outputted to console!');

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

/**
 * Returns an array of coupons from coupons.json
 * @return {Coupon[]}
 */
export function getCoupons() {
    const coupons = [];

    couponData.forEach(couponDatum => {
        coupons.push(new Coupon(couponDatum));
    });

    return coupons;
}
