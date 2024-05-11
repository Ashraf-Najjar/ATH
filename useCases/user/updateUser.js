import User from "../../models/user.js";

export const updateUser = async (args) => {
    const userDB = await User.findById(args.id).catch(err => console.log(err));
    if(!userDB) return "User not exists";
    const updated = await User.updateOne({_id: userDB._id}, {$set: args.user});
    return "Update succefully"
}