import Cart from "../../models/cart.js";

export const getCart = async (args) => {
    let cart = Cart.findOne({ client: args.clientId });
    if (args.populate) {
        cart = cart.populate("items.product");
    }
    return await cart.exec().catch(err => {throw new Error(err)});;
}
