export const getUploadUrl = (imgstr) => {
    if(!imgstr) return '';
    const BE_URL = process.env.EXPO_PUBLIC_BE_URL;
    const fullstr =  `${BE_URL}/${imgstr.startsWith('/') && imgstr.slice(1) || imgstr}`
    return fullstr.toString();
}

export const del_blue = "#00ccbb"