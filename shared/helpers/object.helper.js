export const transformToSingleObject = (arrayOfObjects) => arrayOfObjects.reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});