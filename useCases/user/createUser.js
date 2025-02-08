import User from "../../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (args) => {

    const user = new User(args.user);
    const date = new Date();
    user.password = await bcrypt.hash(user.password, 10);
    user.createdAt = date;
    user.lastUpdate = date;
    user.role = user.role ?? "user";
    await user.save().catch(err => console.log(err));
    return user;
}