import react, { useEffect, useState } from "react";

export interface SignUpState {
    username: string,
    password: string,
    email: string,
}

const initialSignupState = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
}

export const Signup = () => {
    
    const [signUpState, setSignUpState] = useState(initialSignupState)

    const [network, setNetwork] = useState({
        status: 'idle',
        errorMessage: ''
    })

    const [errors, setErrors] = useState<string[]>([])

    const validateForm = (signUpForm: SignUpState): string[] => {
        return [];
    }

    const signupAsync = async (form: SignUpState) => {
        return new Promise<void>(
            (resolve, error) => {
                setTimeout(() => {
                    Math.floor(Math.random() * 2) === 1 
                    ? resolve() 
                    : error("Failed to sign up, please try again");
                }, 1000);
            }
        )
    }

    const submitForm = async (event: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const newErrors = validateForm(signUpState);
        if (newErrors.length === 0) {
            try {
                await signupAsync(signUpState);
                setNetwork({
                    status: 'idle',
                    errorMessage: ''
                })
                setSignUpState(initialSignupState)
            } catch (error) {
                setNetwork({
                    status: 'failure',
                    errorMessage: `Failed to sign up, ${error}. Please try again!`
                })
            }
        } 
        setErrors(newErrors);
    }

    const updateForm = (event: react.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setSignUpState((oldSignUp) => ({
            ...oldSignUp,
            [name]: value
        }))
    }

    return (
        <section className="signup">
            <h2 aria-label="Sign up" className="h3">
                Sign up
            </h2>
            <form className="signup">
                <fieldset>
                    <legend className="h4">
                        Personal Information
                    </legend>
                    <section className="form-section-container">
                        <article className="form-section-item">
                            <label htmlFor="first-name" className="required">
                                First Name 
                            </label>
                            <input 
                                aria-label="First Name"
                                type="text" 
                                id="first-name"
                                name="firstName"
                                value={signUpState.firstName}
                                onChange={updateForm}
                                required
                            />
                        </article>
                        <article className="form-section-item">
                            <label htmlFor="last-name" className="required">
                                Last Name 
                            </label>
                            <input 
                                aria-label="Last Name"
                                type="text" 
                                id="last-name"
                                name="lastName"
                                value={signUpState.lastName}
                                onChange={updateForm}
                                required
                            />
                        </article>
                    </section>
                </fieldset>
                <fieldset>
                    <legend className="h4">
                        Account Information
                    </legend>
                    
                    <section className="form-section-container">
                        <article className="form-section-item"> 
                            <label htmlFor="username" className="required">
                                Username
                            </label>
                            <input
                                aria-label="username"
                                id="username"
                                placeholder="Username"
                                name="username"
                                value={signUpState.username}
                                onChange={updateForm}
                                required
                            />
                        </article>
                        <article className="form-section-item">
                            <label htmlFor="password" className="required">
                                Password 
                            </label>
                            <input
                                aria-label="password"
                                id="password" 
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={signUpState.password}
                                onChange={updateForm}
                                required
                            />
                        </article>
                    </section>
                    <section className="form-section-container">
                        <article className="form-section-item">
                            <label htmlFor="email" className="required">
                                Email
                            </label>
                            <input
                                aria-label="email"
                                id="email" 
                                type="email"
                                placeholder="username@example.com"
                                name="email"
                                value={signUpState.email}
                                onChange={updateForm}
                                required
                            />
                        </article>
                    </section>
                </fieldset>
                <button
                    aria-label="Sign up button"
                    onClick={submitForm}
                >
                    Sign up
                </button>
            </form>
            {
                errors.map((error, idx) => {
                    return (
                        <div key={idx}>
                            {error}
                        </div>
                    )
                })
            }
            {
                network.status !== 'idle' && <div>
                    {network.status}
                    <div>
                        {network.errorMessage}
                    </div>
                </div>
            }
        </section>
    )
}