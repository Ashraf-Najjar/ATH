import mongoose from "mongoose"

export const productFilters = (filters) => {
    return {
         name: {
             field: "name",
             handler: (filterItem) => ({name: new RegExp(filterItem.value, "i")})
         },
 
         description: {
             field: "description",
             handler: (filterItem) => ({description: new RegExp(filterItem.value, "i")})
         },         
         note: {
            field: "note",
            handler: (filterItem) => ({note: new RegExp(filterItem.value, "i")})
        },
         quantity: {
             field: "quantity"
         },
        category: {
            field: "category",
            handler: (filterItem) => ({note: mongoose.Types.ObjectId(filterItem.value)})
        },
        subCategory: {
            field: "subCategory",
            handler: (filterItem) => ({subCategory: mongoose.Types.ObjectId(filterItem.value)})
        }
    } 
 }