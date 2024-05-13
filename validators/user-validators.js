import vine from '@vinejs/vine';

export const validateUserSchema = () => {  
    return vine.object({
        firstName: vine.string(),
        lastName: vine.string(),
        email: vine.string().email(),
        phone: vine.string().mobile(),
        address: vine.object({
            country: vine.string(),
            region: vine.string(),
            point: vine.string(),
        })
      });
} 