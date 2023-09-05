import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Booking.module.scss';

export default function Booking() {
  const [searchInput, setSearchInput] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const { theme } = useContext(ThemeContext) || false;

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

  const resetInput = () => {
    setSearchInput('');
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isOpened) {
      toggle();
    }

    resetInput();
  };

  return (
    <section className={`${styles.booking} fullContainer`}>
      <StaticImage
        src="../../images/lettuce.png"
        alt="lettuce"
        className={styles.decorationImageLettuce}
      />
      <StaticImage
        src="../../images/salad-2.png"
        alt="salad"
        className={styles.decorationImageSalad}
      />
      <div className={styles.bookingWrapper}>
        <div className={styles.bookingInner}>
          <h3
            className={`${styles.bookingTitle} ${
              theme ? styles.bookingTitleGreen : ''
            }`}
          >
            advance booking
          </h3>
          <form
            action="#"
            className={styles.bookingSearch}
            onSubmit={submitHandler}
          >
            <div className={styles.inputGroupSearch}>
              <input
                className={styles.bookingSearchInput}
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
                type="search"
                placeholder="search restaurant"
                required
              />
              <button
                className={`${styles.bookingButton} ${
                  theme ? styles.bookingButtonGreen : ''
                }`}
                type="submit"
              >
                Go
              </button>
            </div>

            <div className={styles.inputGroupSelect}>
              <div className={styles.inputGroupElem}>
                <label className={styles.inputTitle} htmlFor="date">
                  Date
                </label>
                <input className={styles.inputCalendar} id="date" type="date" />
              </div>

              <div className={styles.inputGroupElem}>
                <label className={styles.inputTitle} htmlFor="time">
                  Time
                </label>
                <input type="time" id="time" className={styles.inputCalendar} />
              </div>
              <div className={styles.inputGroupElem}>
                <label className={styles.inputTitle} htmlFor="guests">
                  Guests
                </label>
                <select id="guests" className={styles.inputCalendar}>
                  <option value="1">1 Person</option>
                  <option value="2">2 Person</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 and more</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
