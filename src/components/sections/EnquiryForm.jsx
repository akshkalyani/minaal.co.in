import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Eyebrow, FormField } from "../ui";
import { SERVICE_OPTIONS } from "../../data/site";

/**
 * EnquiryForm — Formspree-backed contact form used on the Contact page.
 * compact: phone layout — shorter heading, no company field, optional phone, accent submit.
 */
const EnquiryForm = ({ formId = "meelwraz", compact = false }) => {
  const [state, handleSubmit] = useForm(formId);
  const error = (field) => (
    <ValidationError field={field} errors={state.errors} className="mn-field__error" />
  );

  return (
    <div className={`mn-form-card ${compact ? "mn-form-card--compact" : ""}`}>
      {compact ? (
        <>
          <h2 className="mn-heading mn-heading--lg">Get a free quote.</h2>
          <p className="mn-form-card__lead">A few details to get started.</p>
        </>
      ) : (
        <>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 className="mn-heading mn-heading--md">Tell us about your next move.</h2>
        </>
      )}

      {state.succeeded ? (
        <p className="mn-form-card__success" role="status">
          Thank you — your enquiry is on its way. We’ll get back to you within 24 hours.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mn-form">
          <FormField id="name" label="Your name" placeholder="Full name" required error={error("name")} />
          {!compact && (
            <FormField
              id="company"
              label="Company name"
              placeholder="Company or brand"
              required
              error={error("company")}
            />
          )}
          <FormField
            id="email"
            type="email"
            label={compact ? "Work email" : "Email address"}
            placeholder="you@company.com"
            required
            error={error("email")}
          />
          <FormField
            id="phone"
            type="tel"
            label={compact ? "Phone (optional)" : "Phone number"}
            placeholder="+91"
            required={!compact}
            error={error("phone")}
          />
          <FormField
            id="service"
            as="select"
            label="Service interested in"
            required
            defaultValue=""
            className="mn-field--full"
            error={error("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormField>
          <FormField
            id="message"
            as="textarea"
            rows={5}
            label={compact ? "Campaign brief" : "Your message"}
            placeholder={
              compact
                ? "Your goals, locations and timing."
                : "Tell us about your goals, locations and campaign timeline."
            }
            required
            className="mn-field--full"
            error={error("message")}
          />
          <div className="mn-field--full mn-form__submit">
            <Button
              type="submit"
              variant={compact ? "primary" : "dark"}
              block
              disabled={state.submitting}
            >
              {state.submitting ? "Sending…" : "Send enquiry"}
            </Button>
            <p className="mn-form__note">By submitting, you agree to be contacted about your enquiry.</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
