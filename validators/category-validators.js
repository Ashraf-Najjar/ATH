import vine from '@vinejs/vine';

export const validateCategorySchema = () => {  
    return vine.object({
        name: vine.string(),
        description: vine.string(),
      });
} 