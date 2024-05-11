import User from "../../models/user.js";

export const user = async (args) => {
    return await User.findOne({_id: args.id}).catch(err => console.log(err));
}