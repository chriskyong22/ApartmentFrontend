import react, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectStatus, selectErrorMessage} from "../../../features/user/userSlice"
import { loginAsync } from "../../../features/user/userSlice";
import { LoginState } from "../../../features/user/userSlice";

export const Login = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (event: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch((loginAsync({
            username,
            password 
        } as LoginState)))
    }

    return (
        <form aria-label="login form" className="login">
            <h2 aria-label="Login" className="h3">
                Login
            </h2>
            <label htmlFor="username">
                Username
            </label>
            <input 
                aria-label="username"
                id="username" 
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password">
                Password 
            </label>
            <input 
                aria-label="password"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button 
                aria-label="login button"
                onClick={login}
            >
                Login
            </button>
            {status === 'idle' ? "" : status}
        </form>
    )
}