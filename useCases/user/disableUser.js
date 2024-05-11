import User from "../../models/user.js";

export const disableUser = async (args) => {
    const userDB = await User.updateOne({_id: args.id}, {enabled: false}).catch(err => console.log(err));
    return "Disabled succefully"
}