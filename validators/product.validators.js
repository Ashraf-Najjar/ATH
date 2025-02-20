import vine from '@vinejs/vine';

export const validateProductSchema = () => {  
    return vine.object({
        name: vine.string(),
        note: vine.string(),
        description: vine.string(),
        price: vine.number(),
        quantity: vine.number(),
      });
}