import React from "react";
import sharedStyles from "styles/shared.module.scss";
import styles from "./landing.module.scss";
import avatar from "./assets/some_handsome_guy.jpg";

type Props = {
  body: string;
  jobTitle: string;
  greeting: string;
};

const Landing = ({ body, jobTitle, greeting }: Props) => (
  <section className={styles.landing} id="about">
    <div className={sharedStyles.container}>
      <div className={styles.landingWrapper}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img height="200" width="200" src={avatar} alt="" />
          </div>
          <div className={styles.heading}>
            <h1 className={styles.headingText}>Patryk Poźniak</h1>
            <div className={styles.bracket} aria-hidden="true"></div>
          </div>
          <h2 className={styles.subText}>{jobTitle}</h2>
        </div>

        <article className={styles.about}>
          <h2 className={styles.aboutHeader}>{greeting}</h2>
          <div className={styles.aboutText}>{body}</div>
        </article>
      </div>
    </div>
  </section>
);

export default Landing;
