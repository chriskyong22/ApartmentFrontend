import { LoginState } from "./userSlice"

export const authenticate = async (loginState: LoginState) => {
    return new Promise<{username: string, firstName: string, lastName: string}>(
        (resolve, error) => {
            setTimeout(() => {
                resolve({
                    username: loginState.username,
                    firstName: "Bob",
                    lastName: "Smith"
                });
            }, 1000)
        }
    )
}

export const logout = async () => {
    return new Promise<void>(
        (resolve, error) => {
            setTimeout(() => {
                Math.floor(Math.random() * 2) === 1 
                    ? resolve() 
                    : error("Failed to log out, please try again");
            }, 1000);
        }
    )
}