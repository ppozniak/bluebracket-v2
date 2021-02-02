import React from "react";
import styles from "./footer.module.scss";
import sharedStyles from "styles/shared.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={sharedStyles.container}>
        <div className={styles.bracket} aria-hidden="true"></div>
        <div>
          <p>&copy; Patryk Poźniak 2021.</p>
          <p>
            Thank you for visiting my page. But please don&apos;t look at the
            console.
          </p>
          <p>
            Icons and {/* @TODO: remove link to background once changed */}
            <a
              href="http://www.freepik.com/free-vector/pixelated-monster-pattern_904310.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              background image
            </a>{" "}
            by{" "}
            <a
              href="http://www.freepik.com"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="http://www.flaticon.com"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
