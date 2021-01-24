import Icon, { IconName } from "components/icon";
import React from "react";
import styles from "./contact.module.scss";
import sharedStyles from "styles/shared.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";

// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

type SocialLink = {
  text: string;
  link: string;
  className: "linkedin" | "github" | "codepen" | "facebook" | "lastfm";
  iconName: IconName;
};

const socialLinks: SocialLink[] = [
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/patrykpozniak",
    className: "linkedin",
    iconName: "linkedin",
  },
  {
    text: "GitHub",
    link: "https://github.com/ppozniak",
    className: "github",
    iconName: "github",
  },
  {
    text: "Codepen",
    link: "http://codepen.io/ppozniak95",
    className: "codepen",
    iconName: "codepen",
  },
  {
    text: "Facebook",
    link: "https://www.facebook.com/ppozniak95",
    className: "facebook",
    iconName: "facebook",
  },
  {
    text: "Last.fm",
    link: "http://www.last.fm/user/pozioxd",
    className: "lastfm",
    iconName: "lastfm",
  },
];

type ErrorMessageProps = {
  text: string;
  htmlFor: string;
  condition: boolean;
};

const ErrorMessage = ({ text, htmlFor, condition }: ErrorMessageProps) => (
  <label
    htmlFor={htmlFor}
    className={classNames(styles.errorMessage, { [styles.visible]: condition })}
    aria-hidden={!condition}
  >
    {text}
  </label>
);

type ContactFormInterface = {
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, errors } = useForm<ContactFormInterface>();
  const onSubmit = (values: ContactFormInterface) => {
    console.log(values);
  };

  return (
    <section
      className={classNames(styles.contact, sharedStyles.section)}
      id="contact"
    >
      <div className={classNames(styles.container, sharedStyles.container)}>
        <div className={styles.contactFormSection}>
          <h2>Contact</h2>
          <p>
            Have a question? Want to hire me?
            <br /> Go ahead,{" "}
            <span title="Unless you want me to ( ͡° ͜ʖ ͡°)">
              I don&apos;t bite.
            </span>
            <br /> Use the form below or mail me directly at{" "}
            <a href="mailto:ppozniak95@gmail.com">ppozniak95@gmail.com</a>
          </p>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            action="https://formspree.io/ppozniak95@gmail.com"
            method="POST"
            noValidate
          >
            <fieldset>
              <legend className={sharedStyles.srOnly}>Form contents</legend>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  ref={register({ required: true, pattern: emailRegex })}
                  className={classNames(styles.formInput, {
                    [styles.inputError]: errors.email,
                  })}
                  required
                  placeholder="frontendex@coolio.com"
                  type="email"
                  autoComplete="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  text="Be sure to provide real email address so I can contact you"
                  condition={!!errors.email}
                  htmlFor="email"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="subject">
                  Subject
                </label>
                <input
                  ref={register({ required: true, minLength: 3 })}
                  className={classNames(styles.formInput, {
                    [styles.inputError]: errors.subject,
                  })}
                  required
                  placeholder="Job offer - Senior Frontend Ninja Tank Mage (mooTools + wordpress)"
                  type="text"
                  name="subject"
                  id="subject"
                />
                <ErrorMessage
                  text="Please give me some subject :("
                  condition={!!errors.subject}
                  htmlFor="subject"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  ref={register({ required: true, minLength: 12 })}
                  id="message"
                  className={classNames(styles.formInput, styles.formTextarea, {
                    [styles.inputError]: errors.message,
                  })}
                  required
                  placeholder="Hey man, we need you in our team please join us we have free ping-pong table and stuff and we give money for work so yeah, please. P.S you're quite handsome."
                  name="message"
                ></textarea>
                <ErrorMessage
                  text="Write something, please"
                  condition={!!errors.message}
                  htmlFor="message"
                />
              </div>
              <button
                type="submit"
                className={classNames(styles.submit, sharedStyles.btn)}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className={styles.socials}>
          <h2>Social links</h2>
          <ul className={styles.socialsList}>
            {socialLinks.map(({ text, link, iconName, className }) => (
              <li key={text} className={styles.socialsItem}>
                <a
                  className={classNames(styles.socialsLink, styles[className])}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={iconName} className={styles.socialsIcon} />
                  <span
                    className={styles.socialsTitle}
                    aria-label={`Go to my ${text} profile`}
                  >
                    {text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
