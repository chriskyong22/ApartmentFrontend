import react from "react";

export const Signup = () => {
    return (
        <section className="signup">
            <h2 aria-label="Sign up" className="h3">
                Sign up
            </h2>
            <label htmlFor="username">
                Username
            </label>
            <input
                aria-label="username"
                id="username"
                placeholder="Username"
            />
            <label htmlFor="password">
                Password 
            </label>
            <input
                aria-label="password"
                id="password" 
                type="password"
                placeholder="Password"
            />
            <label htmlFor="email">
                Email
            </label>
            <input
                aria-label="email"
                id="email" 
                type="email"
                placeholder="username@example.com"
            />
            <button
                aria-label="Sign up button"
            >
                Sign up
            </button>
        </section>
    )
}