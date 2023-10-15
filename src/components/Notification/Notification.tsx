import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../../context/Context';
import arrow from '../../images/icons/notification-input-arrow.svg';

import * as styles from './Notification.module.scss';

export default function Notification() {
  const { theme } = useContext(ThemeContext) || false;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });
  const successMessage = useRef<HTMLParagraphElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitted(true);
    e.preventDefault();
  };

  const showSuccessMessage = () => {
    if (!successMessage.current) return;

    successMessage.current.classList.add(`${styles.successMessageShow}`);
    setTimeout(() => {
      successMessage.current!.classList.remove(`${styles.successMessageShow}`);
    }, 3000);
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  useEffect(() => {
    if (isSubmitted) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => {
          showSuccessMessage();
        })
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ email: '' }))
        .catch(error => console.log(error));
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
        <div className={styles.notificationInput}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            id="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className={styles.emailInput}
              name="email"
              type="email"
              placeholder="e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              className={`${styles.notificationButton} ${
                theme ? styles.notificationButtonGreen : ''
              }`}
            >
              <img src={arrow} alt="notification arrow button" />
            </button>

            <p className={`${styles.successMessage}`} ref={successMessage}>
              Thank you, form sent!
            </p>
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
