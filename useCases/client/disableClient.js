import Client from "../../models/client.js";

export const disableClient = async (args) => {
    const clientDB = await Client.updateOne({_id: args.id}, {enabled: false}).catch(err => console.log(err));
    return "Disabled succefully"
}