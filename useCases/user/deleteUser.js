import User from "../../models/user.js";

export const deleteUser = async (args) => {
    const userDB = await User.updateOne({_id: args.id}, {deleted: true}).catch(err => console.log(err));
    return "Deleted succefully"
}