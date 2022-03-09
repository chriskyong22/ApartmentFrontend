import react from "react"
import { MessageForm } from "../MessageForm/MessageForm"

export const Home = () => {
    return (
        <section aria-label="home-page" className="home">
            <article aria-label="apartments-section" className="apartment-container">

                <section className="apartment">
                    <header className="apartment-header" aria-label="Avaliable Apartments">
                        <h2>
                            Avaliable Apartments
                        </h2>
                    </header>
                    <p aria-label="description" className="description text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam.
                    </p>
                    <button aria-label="Check apartments">
                        Check Apartments
                    </button>
                </section>

                <section className="apartment">
                    <header aria-label="Own an apartment?">
                        <h2>
                            Own an Apartment?
                        </h2>
                    </header>
                    <p aria-label="description" className="description text">
                        Have a problem with your apartment? Want to check if you have to pay anything? 
                        See below!
                    </p>
                    <button aria-label="Check info">
                        Check Info
                    </button>
                </section>

            </article>

            <article aria-label="review-section" className="review-container">
                <header className="review-header">
                    <h2 className="text h2">
                        Are you interested but want to know more?
                    </h2>
                    <h3>
                        Check out some reviews!
                    </h3>
                </header>
                <div className="review-links h3">
                    <a href="">
                        <svg fill="#D32323" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Yelp</title><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.528-.847.288-1.894 1.236-1.584zm-4.796-4.368L5.454 2.916a1.072 1.072 0 0 1 .466-1.5A14.973 14.973 0 0 1 11.184.003a1.07 1.07 0 0 1 1.153 1.068v9.768c0 1.096-1.45 1.483-1.998.535zm-.857 4.17L4.44 16.806a1.073 1.073 0 0 1-1.324-.92 9.218 9.218 0 0 1 .43-3.997 1.07 1.07 0 0 1 1.485-.62l4.668 2.279c.9.438.763 1.76-.207 2zm.886 1.477c.669-.744 1.901-.246 1.866.752l-.19 5.188a1.073 1.073 0 0 1-1.247 1.02 9.314 9.314 0 0 1-3.722-1.502 1.072 1.072 0 0 1-.187-1.6l3.477-3.864z"/>
                        </svg>
                    </a>
                    <a href="">
                        <svg fill="#006AFF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zillow</title><path d="M12.006 0L1.086 8.627v3.868c3.386-2.013 11.219-5.13 14.763-6.015.11-.024.16.005.227.078.372.427 1.586 1.899 1.916 2.301a.128.128 0 0 1-.03.195 43.607 43.607 0 0 0-6.67 6.527c-.03.037-.006.043.012.03 2.642-1.134 8.828-2.94 11.622-3.452V8.627zm-.48 11.177c-2.136.708-8.195 3.307-10.452 4.576V24h21.852v-7.936c-2.99.506-11.902 3.16-15.959 5.246a.183.183 0 0 1-.23-.036l-2.044-2.429c-.055-.061-.062-.098.011-.208 1.574-2.3 4.789-5.899 6.833-7.418.042-.03.031-.06-.012-.042Z"/></svg>
                    </a>        
                </div>
            </article>

            <article aria-label="contact-section" className="contact-container">
                <header className="contact-header">
                    <h2 className="text">
                        Leave a message!
                    </h2>
                </header>
                <section className="message-container">
                    <MessageForm/>
                </section>
            </article>
        </section>
    )
}