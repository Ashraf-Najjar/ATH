import vine from '@vinejs/vine'

export const validate = async (schema, data) => {
    try {
        return await vine.validate({schema, data});
    } catch(error) {
        throw new Error(error.messages)
    }
}