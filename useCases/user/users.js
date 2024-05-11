import User from "../../models/user.js";

export const users = async (args) => {
    return await User.find().catch(err => console.log(err));
}