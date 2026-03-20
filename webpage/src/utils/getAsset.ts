import { BASE_URL } from "../config";

export const getAsset = (path: string) => {
    const basePath = BASE_URL || '/';
    return `${basePath}${path}`;
}