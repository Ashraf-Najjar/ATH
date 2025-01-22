export const subCategoryFilters = (filters) => {
    return {
         name: {
             field: "name",
             handler: (filterItem) => ({email: new RegExp(filterItem.value, "i")})
         },
 
         note: {
             field: "note",
             handler: (filterItem) => ({note: new RegExp(filterItem.value, "i")})
         },
         
         description: {
             field: "description",
             handler: (filterItem) => ({description: new RegExp(filterItem.value, "i")})
         }
    } 
 }