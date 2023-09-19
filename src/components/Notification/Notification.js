import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import arrow from '../../images/icons/notification-input-arrow.svg';

import * as styles from './Notification.module.scss';

export default function Notification() {
  const { theme } = useContext(ThemeContext) || false;

  const handleSubmit = event => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
        alert('Form successfully submitted');
        myForm.reset();
      })
      .catch(error => alert(error));
  };

  return (
    <div className={`container ${styles.notificationSection}`}>
      <div className={styles.notificationInner}>
        <div className={styles.notificationHeading}>
          <h2 className={styles.sectionTitle}>
            Get notified <br /> about new amazing products
          </h2>
          <p className={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus.
          </p>
        </div>
        {/* <div className={styles.notificationInput}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className={styles.emailInput}
              name="email"
              type="email"
              placeholder="email"
              required
            />
            <button
              className={`${styles.notificationButton} ${
                theme ? styles.notificationButtonGreen : ''
              }`}
              type="submit"
            >
              <img src={arrow} alt="notification arrow button" />
            </button>
          </form>
        </div> */}
        <p>Ajax form below</p>
        <div className={styles.notificationInput}>
          <form
            name="contactAjax"
            method="POST"
            data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name-ajax" value="contact" />
            <input
              className={styles.emailInput}
              name="email"
              type="email"
              placeholder="email ajax"
              required
            />
            <button
              className={`${styles.notificationButton} ${
                theme ? styles.notificationButtonGreen : ''
              }`}
              // type="submit"
            >
              <img src={arrow} alt="notification arrow button" />
            </button>
          </form>
        </div>
        <ul className={styles.linkGroup}>
          <li className={styles.link}>
            <a href="#" target="_blank">
              Product
            </a>
          </li>
          <li className={styles.link}>
            <a href="#" target="_blank">
              Company
            </a>
          </li>
          <li className={styles.link}>
            <a href="#" target="_blank">
              Learn
            </a>
          </li>
          <li className={styles.link}>
            <a href="#" target="_blank">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
