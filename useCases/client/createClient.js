import Client from "../../models/client.js";

export const createClient = async (args) => {
    const client = new Client(args.client);
    const date = new Date();
    client.createdAt = date;
    client.lastUpdate = date;
    await client.save().catch(err => console.log(err));
    return client;
}