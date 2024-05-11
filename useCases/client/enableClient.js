import Client from "../../models/client.js";

export const enableClient = async (args) => {
    const clientDB = await Client.updateOne({_id: args.id}, {enabled: true}).catch(err => console.log(err));
    return "Eabled succefully"
}