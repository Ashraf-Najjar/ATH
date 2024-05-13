import vine from '@vinejs/vine';

export const validateSubCategorySchema = () => {  
    return vine.object({
        name: vine.string(),
        description: vine.string(),
        category: vine.string(),
      });
} 