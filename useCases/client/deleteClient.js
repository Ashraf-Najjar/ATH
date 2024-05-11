import Client from "../../models/client.js";

export const deleteClient = async (args) => {
    const clientDB = await Client.updateOne({_id: args.id}, {deleted: true}).catch(err => console.log(err));
    return "Deleted succefully"
}