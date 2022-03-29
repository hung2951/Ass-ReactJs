import instance from "./instance";
export const listCate = () => {
    const url = `/api/category`;
    return instance.get(url);
}