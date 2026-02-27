export const getAsset = (path: string) => {
    const basePath = import.meta.env.BASE_URL || '/';
    return `${basePath}${path}`;
}