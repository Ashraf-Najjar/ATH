import User from "../../models/user.js";
import bcrypt from "bcrypt";
import {createToken} from "../../auth/auth.js";
export const login = async (args) => {
    const { email, password } = args;
    const user = await User.findOne({email}).catch(err => console.log(err));
    if(!user){
        throw Error('incorrect email');
    }
    const auth = await bcrypt.compare(password, user.password);
    if(!auth){
        throw Error('incorrect password');
    }
    console.log("user info is ", user)
    const token = await createToken({email: user.email, role: user.role});
    return {
        token,
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
        }
    };
}