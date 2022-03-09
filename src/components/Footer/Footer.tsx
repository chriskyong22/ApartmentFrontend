import react from "react"

export const Footer = () => {
    return (
        <footer className="footer">
            <section aria-label="contact info" className="contact-links">
                <article aria-label="email" className="email">
                    example@gmail.com
                </article>
                <article aria-label="phone" className="phone">
                    +19999999999
                </article>
            </section>
            <div>
                Copyright © 2022 Christopher Yong
            </div>
        </footer>
    )
}