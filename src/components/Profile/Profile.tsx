import react from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserInfo, selectStatus, selectErrorMessage } from "../../features/user/userSlice";
import { logoutAsync } from "../../features/user/userSlice";

export const Profile = () => {
    const user = useAppSelector(selectUserInfo);
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);
    const errorMessage = useAppSelector(selectErrorMessage);



    return (
        <section className="profile">
            <header aria-label={"Welcome Message"}>
                <p className="h4">
                    Welcome
                </p>
                <p className="h4">
                    {`${user.firstName}!`}
                </p>
            </header>
            <a href="/myApartment">
                See my apartment(s)
            </a>
            <a href="/problems">
                Have a problem?
            </a>
            <a href="/userSettings">
                Settings
            </a>
            <button onClick={() => dispatch(logoutAsync())}>
                Log out
            </button>
            {status}
            {errorMessage}
        </section>
    )
}