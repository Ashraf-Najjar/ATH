import {createToken} from "../../auth/auth.js";
import userUseCases from "../../useCases/user/index.js";

export const signup = async (args) => {
    console.log(args)
    const user = await userUseCases.createUser({user: {...args, role: "client"}});
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