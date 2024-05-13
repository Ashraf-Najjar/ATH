import vine from '@vinejs/vine'

export const validate = async (schema, data) => {
    try {
        return await vine.validate({schema, data});
    } catch(error) {
        console.log(error.messages)
        throw new Error(error.messages)
    }
}