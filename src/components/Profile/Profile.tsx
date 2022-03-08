import react from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserInfo } from "../../features/user/userSlice";
import { logoutAsync } from "../../features/user/userSlice";

export const Profile = () => {
    const user = useAppSelector(selectUserInfo);
    const dispatch = useAppDispatch();

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
        </section>
    )
}