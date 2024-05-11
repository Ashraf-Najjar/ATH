import Client from "../../models/client.js";

export const updateClient = async (args) => {
    const clientDB = await Client.findById(args.id).catch(err => console.log(err));
    if(!clientDB) return "Client not exists";
    const updated = await Client.updateOne({_id: clientDB._id}, {$set: args.client});
    return "Update succefully"
}