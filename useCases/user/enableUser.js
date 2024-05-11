import User from "../../models/user.js";

export const enableUser = async (args) => {
    const userDB = await User.updateOne({_id: args.id}, {enabled: true}).catch(err => console.log(err));
    return "Eabled succefully"
}