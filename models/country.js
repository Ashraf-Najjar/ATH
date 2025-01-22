import mongoose from "mongoose";
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: String
});


export default mongoose.model('Country', countrySchema);
