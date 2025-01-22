import vine from '@vinejs/vine';

export const validateProductSchema = () => {  
    return vine.object({
        name: vine.string(),
      });
}