import {transformToSingleObject} from "./object.helper.js";
export const extractFilters = (filters, filtersConfig) => {
    let _filters = [];
    let allowedFilters = Object.keys(filtersConfig);
    
    for(let filter of filters){
        if(!allowedFilters.includes(filter.field)) continue;
        const filterConfig = filtersConfig[filter.field];
        if(filterConfig.handler){
            _filters.push(filterConfig.handler(filter))
        }else {
            _filters.push({
                [filterConfig.field]: filter.value
            })
        }
    }
    return transformToSingleObject(_filters);
}