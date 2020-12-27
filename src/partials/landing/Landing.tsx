import * as React from "react";
import avatar from "./assets/some_handsome_guy.jpg";
import * as styles from "./landing.module.scss";

const Landing = () => (
  <section className={styles.landing} id="about">
    <div className="container">
      <div className={styles.landingWrapper}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img height="200" width="200" src={avatar} alt="" />
          </div>
          <div className={styles.heading}>
            <h1 className={styles.headingText}>Patryk Poźniak</h1>
            <div className={styles.bracket} aria-hidden="true"></div>
          </div>
          <h2 className={styles.subText}>Front-End Developer</h2>
        </div>

        <article className="about">
          <h2 className="about__header">Hello there!</h2>
          <div className="about__text">
            <p>
              I am young and ambitious web developer from Poland, based in
              London. Programming is my passion since childhood. I&apos;ve took
              the front-end path, and now I am strongly focusing on
              <strong>JavaScript</strong>, constantly learning to keep up with
              all the newest trends. I always try to write elegant, readable and
              efficient code using the best practices. Sharing the knowledge
              gives me lots of satisfaction and I am always willing to help.
            </p>

            <p>
              As a hobby I really like to develop games in Unity. I&apos;m a big
              fan of heavy music. Also I&apos;m a father of{" "}
              <code
                id="inline-code-birthday"
                className="inline-code inline-code--interactive"
              >
                calcAge(new Date(2016, 9, 20));
              </code>
              old son.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Landing;
