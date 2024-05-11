import User from "../../models/user.js";

export const createUser = async (args) => {
    const user = new User(args.user);
    const date = new Date();
    user.createdAt = date;
    user.lastUpdate = date;
    await user.save().catch(err => console.log(err));
    return user;
}