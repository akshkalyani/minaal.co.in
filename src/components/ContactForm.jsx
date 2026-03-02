import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("meelwraz");

    if (state.succeeded) {
        return (
            <div className="contact-form-section">
                <div className="form-success-message">
                    <div className="success-icon">✅</div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form-new">

                <div className="form-row-new">
                    <div className="form-group-new">
                        <label htmlFor="name">Your Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="form-group-new">
                        <label htmlFor="company">Company Name *</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                        />
                        <ValidationError prefix="Company" field="company" errors={state.errors} />
                    </div>
                </div>

                <div className="form-row-new">
                    <div className="form-group-new">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="form-group-new">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                </div>

                <div className="form-group-new">
                    <label htmlFor="service">Service Interested In *</label>
                    <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        <option value="billboard">Billboard Advertising</option>
                        <option value="transit">Transit Advertising</option>
                        <option value="retail">Retail Branding</option>
                        <option value="digital">Digital LED Displays</option>
                        <option value="event">Event Branding</option>
                        <option value="creative">Creative Design</option>
                        <option value="consultation">General Consultation</option>
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} />
                </div>

                <div className="form-group-new">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                    type="submit"
                    className={`btn-new btn-primary-new btn-block ${state.submitting ? "loading" : ""}`}
                    disabled={state.submitting}
                >
                    <span className="btn-text-new">
                        {state.submitting ? "Sending..." : "Send Message"}
                    </span>
                    {state.submitting && <span className="btn-loader-new"></span>}
                </button>

                <p className="form-note-new">We'll respond within 24 hours</p>
            </form>
        </div>
    );
};

export default ContactForm;