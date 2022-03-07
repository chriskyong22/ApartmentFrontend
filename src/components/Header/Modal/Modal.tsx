import react, { useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectStatus, selectUserInfo } from "../../../features/user/userSlice";
import { Profile } from "../../Profile/Profile"

export const Modal = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);
    const userInfo = useAppSelector(selectUserInfo);

    const [showSignUp, setShowSignUp] = useState(false);
    const toggleForm = (event: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        setShowSignUp((oldState) => !oldState);
    }


    const renderModal = () => {
        if (status !== 'loggedIn') {
            return (
                <>
                    {
                        showSignUp && <Signup/>
                    }
                    {
                        !showSignUp && <Login/>
                    }
                    <button onClick={toggleForm}>
                        {showSignUp ? "Login" : "Sign Up"}
                    </button>
                </>
            )
        } 
        return (
            <>
                <Profile/>
            </>
        )
    }

    return (
        <div className="modal">
            {renderModal()}
        </div>
    )
}