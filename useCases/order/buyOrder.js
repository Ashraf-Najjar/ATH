import Cart from "../../models/cart.js";
import Product from "../../models/product.js";
import Order from "../../models/order.js";


export const buyOrderUseCase = async (args) => {
    const { clientId } = args;

    const cart = await Cart.findOne({ client: clientId }).populate("items.product");
    if (!cart || cart.items.length === 0) {
        throw new Error({ message: "Cart is empty" });
    }

    let totalAmount = 0;
    for (let item of cart.items) {
        if (item.product.quantity < item.quantity) {
            throw new Error({ message: `Not enough stock for ${item.product.name}` });
        }
        totalAmount += item.product.price * item.quantity;
        await Product.findByIdAndUpdate(item.product._id, { $inc: { quantity: -item.quantity } });
    }

    const order = new Order({
        client: clientId,
        items: cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price
        })),
        totalAmount
    });

    await order.save();
    await Cart.findOneAndDelete({ client: clientId });

    return { message: "Purchase successful", order };
}