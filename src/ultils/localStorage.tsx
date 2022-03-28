import { UserType } from "../types/user";
export const addLocalstorage = (user: UserType, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const getLocalstorage = () => {
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
}