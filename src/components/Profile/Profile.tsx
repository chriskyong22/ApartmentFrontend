import react from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserInfo } from "../../features/user/userSlice";

export const Profile = () => {
    const user = useAppSelector(selectUserInfo);

    return (
        <section className="profile">
            <h2 className="h4">
                {`Welcome ${user.firstName}!`}
            </h2>
            <article>
                
            </article>
        </section>
    )
}