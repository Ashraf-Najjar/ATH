import Cart from "../../models/cart.js";
import Product from "../../models/product.js";

export const addToCart = async (args) => {
    const { clientId, productId, quantity } = args;

    const product = await Product.findById(productId).catch(err => console.log(err));
    if (!product)  throw new Error("Product not found");

    if (product.quantity < quantity) {
        throw new Error("Not enough stock available");
    }

    let cart = await Cart.findOne({ client: clientId });

    if (!cart) {
        cart = new Cart({ client: clientId, items: [] });
    }

    const existingItem = cart.items.find(item => item.product.toString() === productId);

    if (existingItem) {
        if (product.quantity < existingItem.quantity + quantity) {
            throw new Error("Not enough stock available");
        }
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ product: productId, quantity });
    }

    cart.lastUpdate = new Date();
    await cart.save();
    return cart;
}