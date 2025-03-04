import Order from "../../models/order.js";

export const ordersUseCase = async(args) => {
    const { clientId, populate } = args;
    
    let orders = Order.find({ client: clientId });
    if(populate){
        orders.populate("items.product");
    }

    return await orders.exec().catch(err => {throw new Error(err)});
}