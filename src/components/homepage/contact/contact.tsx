import Icon, { IconName } from "components/icon";
import React from "react";
import styles from "./contact.module.scss";
import sharedStyles from "styles/shared.module.scss";
import classNames from "classnames";

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

const Contact = () => {
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
          {/* @TODO: JS validation */}
          {/* @TODO: Gatsby send email */}
          <form
            action="https://formspree.io/ppozniak95@gmail.com"
            method="POST"
          >
            <fieldset>
              <legend className={sharedStyles.srOnly}>Form contents</legend>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.formInput}
                  required
                  placeholder="frontendex@coolio.com"
                  type="email"
                  autoComplete="email"
                  name="_replyto"
                  id="email"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="subject">
                  Subject
                </label>
                <input
                  className={styles.formInput}
                  required
                  placeholder="Job offer - Senior Frontend Ninja Tank Mage (mooTools + wordpress)"
                  type="text"
                  name="_subject"
                  id="subject"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className={classNames(styles.formInput, styles.formTextarea)}
                  required
                  placeholder="Hey man, we need you in our team please join us we have free ping-pong table and stuff and we give money for work so yeah, please. P.S you're quite handsome."
                  name="message"
                ></textarea>
              </div>
              {/* @TODO: Pull right \/ */}
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
