import { useEffect, useRef, useState } from 'react';
import { renderBroderForSliderReviewsLinesElems } from '../../utils/render';
import Swiper, { Navigation, Controller } from 'swiper'

import styles from './Review.module.css';
// import 'swiper/css'

function Review(): JSX.Element {
  const [swiper, setSwiper] = useState<null | Swiper>(null);

  const reviewRightRef = useRef<null | HTMLDivElement>(null);
  const sliderReviewClass = `.${styles['slider-review__line']}`;

  useEffect(() => {
    const reviewListElement = reviewRightRef.current;

    if (reviewListElement) {
      const sliderReviewsLinesElems = reviewListElement.querySelectorAll<HTMLLIElement>(sliderReviewClass);
      renderBroderForSliderReviewsLinesElems(sliderReviewsLinesElems);
    }
  }, []);

  useEffect(() => {
    if (!swiper) {
      return;
    }
    const sliderRightElem = document.querySelector(`.${styles['slider-right']}`) as HTMLDivElement;
    console.log(sliderRightElem)

    const instansSwiper = new Swiper(sliderRightElem, {
      modules: [Navigation, Controller],
      navigation: {
        nextEl: `.${styles['slider-review__right']}`,
        prevEl: `.${styles['slider-review__left']}`,
      },
      wrapperClass: `${styles['slider-review__list']}`,
      slideClass: `${styles['slider-review__line']}`,
      loop: true,
      slidesPerView: 2,
      loopedSlides: 4,
      spaceBetween: 25,
      width: 395,
      controller: {
        control: swiper
      }
    });


    return () => {
      instansSwiper.destroy();
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      return;
    }

    const sliderLeftElem = document.querySelector(`.${styles['slider-left']}`) as HTMLDivElement;

    const instansSwiper = new Swiper(sliderLeftElem, {
      wrapperClass: `${styles['slider-review__list']}`,
      slideClass: `${styles['slider-review__line']}`,
      loop: true,
      loopedSlides: 4,
    });

    setSwiper(instansSwiper)

    return () => {
      instansSwiper.destroy();
    }
  }, [])

  return (
    <section className={styles['review']}>
      <div className={styles['review__wrapper']}>
        <ul className={styles['stars']}>
          <li className={styles['star']}></li>
        </ul>
        <div className={styles['review__title-wrapper']}>
          <h3 className={styles['small-title']}>Review</h3>
        </div>
        <div className={styles['review__left']}>
          <h4 className={styles['review__title']}>Best courses ever</h4>
          <p className={styles['text']}>Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.</p>
        </div>
        <div className={styles['review__right']} ref={reviewRightRef}>
          <div className={styles['slider-left']}>
            <div className={styles['slider-review__count']}>
              <div className={styles['slider-review__current']}>1</div>
              <div className={styles['slider-review__all']}>3</div>
            </div>
            <ul className={styles['slider-review__list']}>
              <li className={`${styles['slider-review__line']}`}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image.jpg" />
              </li>
              <li className={styles['slider-review__line']}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image-two.jpg" />
              </li>
              <li className={styles['slider-review__line']}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image-three.jpg" />
              </li>
            </ul>
          </div>
          <div className={styles['slider-right']}>
            <div className={styles['slider-review__diraction']}>
              <div className={styles['slider-review__left']}></div>
              <div className={styles['slider-review__right']}></div>
            </div>
            <ul className={styles['slider-review__list']}>
              <li className={styles['slider-review__line']}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image-two.jpg" />
              </li>
              <li className={styles['slider-review__line']}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image-three.jpg" />
              </li>
              <li className={`${styles['slider-review__line']}`}>
                <div className={styles['slider-review__border']}></div>
                <img className={styles['slider-review__image']} src="./images/review-image.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;