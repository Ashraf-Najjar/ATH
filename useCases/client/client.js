import Client from "../../models/client.js";

export const client = async (args) => {
    return await Client.findOne({_id: args.id}).catch(err => console.log(err));
}