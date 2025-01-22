export const userFilters = (filters) => {
   return {
        name: {
            field: "name",
            handler: (filterItem) => (
                {
                    $expr: {
                      $regexMatch: {
                        input: { $concat: ['$firstName', ' ', '$lastName'] },
                        regex: filterItem.value?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") || '',
                        options: 'i'
                      }
                    }
                  }
            )
        },

        email: {
            field: "email",
            handler: (filterItem) => ({email: new RegExp(filterItem.value, "i")})
        },
        
        phone: {
            field: "phone",
            handler: (filterItem) => ({phone: new RegExp(filterItem.value, "i")})
        }
   } 
}