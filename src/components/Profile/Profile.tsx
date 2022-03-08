import react from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserInfo } from "../../features/user/userSlice";

export const Profile = () => {
    const user = useAppSelector(selectUserInfo);

    return (
        <section className="profile">
            <header>
                <h2 className="h4">
                    {`Welcome ${user.firstName}`}
                </h2>
            </header>
            <a href="/myApartment">
                See my apartment(s)
            </a>
            <a href="/problems">
                Have a problem?
            </a>
            <button>
                Settings
            </button>
            <button>
                Log out
            </button>
        </section>
    )
}