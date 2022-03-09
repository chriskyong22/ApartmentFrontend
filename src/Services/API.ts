import axios from "axios";

const BACKEND_URL = "";

export const sendMessage = async (
        form: {[key: string]: string}
    ) => {  
    return new Promise((resolve, error) => {
        setTimeout(() => {
            resolve(form);
        }, 1000);
    })
}