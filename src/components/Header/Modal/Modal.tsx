import react, { useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectLoginStatus, selectUserInfo } from "../../../features/user/userSlice";
import { Profile } from "../../Profile/Profile"
interface ModalProps {
    closeModal: () => void;
}


export const Modal = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectLoginStatus);
    const userInfo = useAppSelector(selectUserInfo);

    const [showSignUp, setShowSignUp] = useState(false);
    const toggleForm = (event: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        setShowSignUp((oldState) => !oldState);
    }


    const renderModal = () => {
        if (status === 'loggedOut') {
            return (
                <>
                    {
                        showSignUp && <Signup/>
                    }
                    {
                        !showSignUp && <Login/>
                    }
                    <button onClick={toggleForm}>
                        Go to {showSignUp ? "Login" : "Sign up"}
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