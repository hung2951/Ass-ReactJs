import { ProductType } from "../types/product";
import instance from "./instance";
import { getLocalstorage } from '../ultils/localStorage';


export const create = (product: ProductType) => {
    const { token, user } = getLocalstorage()
    const url = `/api/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
export const list = () => {
    const url = '/api/products';
    return instance.get(url)
}
export const getOne = (id: any) => {
    const url = `/api/product/${id}`;
    return instance.get(url)
}
export const remove = (id: number) => {
    const url = `/api/product/${id}`;
    return instance.delete(url)
}
export const update = (product: ProductType) => {
    const url = `/api/product/${product._id}`;
    return instance.put(url, product)
}