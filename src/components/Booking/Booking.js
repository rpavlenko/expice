import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Booking.module.scss';

export default function Booking() {
  return (
    <section className={styles.booking}>
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
          <h3 className={styles.bookingTitle}>advance booking</h3>
          <form action="" className={styles.bookingSearch}>
            <div className={styles.inputGroupSearch}>
              <input
                className={styles.bookingSearchInput}
                type="search"
                placeholder="search restaurant"
                required
              />
              <button className={styles.bookingButton} type="button">
                Go
              </button>
            </div>

            <div className={styles.inputGroupSelect}>
              <div className={styles.inputGroupElem}>
                <label className={styles.inputTitle} htmlFor="date">
                  Date
                </label>
                <input type="date" id="date" className={styles.inputCalendar} />
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
