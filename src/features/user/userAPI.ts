import { LoginState } from "./userSlice"

export const authenticate = async (loginState: LoginState) => {
    return new Promise<{username: string, firstName: string, lastName: string}>((resolve, error) => {
        setTimeout(() => {
            resolve({
                username: loginState.username,
                firstName: "Bob",
                lastName: "Smith"
            });
        }, 1000)
    })
}