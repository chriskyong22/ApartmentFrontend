import react, { useState } from "react"
import { sendMessage } from "../../Services/API"

export const MessageForm = () => {

    const [form, setForm] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        message: ""
    })


    const updateForm = (event: react.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        setForm((oldForm) => ({
            ...oldForm,
            [event.target.name]: value
        }))
    }

    const sendForm = async (event: react.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Send asynchronous 
        let answer = await sendMessage(form);
        console.log(answer);
        setForm({
            name: "",
            phoneNumber: "",
            email: "",
            message: ""
        })
    }

    return (
        <form className="message-form">
            <fieldset className="message-recipient">
                <legend className="h4">
                    Your Information
                </legend>
                <label htmlFor="form-full-name">
                    Full Name
                </label>
                <input 
                    type="text" 
                    id="form-full-name" 
                    placeholder="Full Name"
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                >
                </input>

                <label htmlFor="form-phone-number">
                    Phone Number 
                </label>
                <input 
                    type="tel" 
                    id="form-phone-number"
                    placeholder="XXXXXXXXXXX"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={updateForm}
                    />

                <label htmlFor="form-email">
                    Email
                </label>
                <input 
                    type="email" 
                    id="form-email" 
                    placeholder="example@example.com"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                />
            </fieldset>
            <fieldset>
                <legend className="h4 required">
                    Message
                </legend>
                <textarea 
                    required
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                >

                </textarea>
            </fieldset>
            <button 
                type="submit"
                onClick={sendForm}
            >
                Send
            </button>
        </form>
    )
}