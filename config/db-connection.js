import mongoose from "mongoose";

const options = {
    // useNewUrlParser: false,
};

export const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, options);
        console.log('Db Connected ');
      } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
      }
}