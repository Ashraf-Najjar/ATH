import Client from "../../models/client.js";

export const clients = async (args) => {
    return await Client.find().catch(err => console.log(err));
}