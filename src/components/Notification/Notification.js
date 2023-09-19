import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/Context';
import arrow from '../../images/icons/notification-input-arrow.svg';

import * as styles from './Notification.module.scss';

export default function Notification() {
  const { theme } = useContext(ThemeContext) || false;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    setIsSubmitted(true);
    e.preventDefault();
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  useEffect(() => {
    if (isSubmitted) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contactAjax', ...formData }),
      })
        .then(() => alert('Success!'))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ email: '' }))
        .catch(error => alert(error));
    }
  }, [formData, isSubmitted]);

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
            data-netlify-honeypot="bot-field"
            // action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name-ajax" value="contact" />
            <input
              className={styles.emailInput}
              name="email"
              type="email"
              placeholder="email ajax"
              value={formData.email}
              onChange={handleChange}
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
