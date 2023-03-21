import { useEffect, useRef, useState, EventHandler, ChangeEvent } from 'react';
import SVGBorder from '../../utils/library/svg-border';
import { renderBroderForQuestionsLineElem } from '../../utils/render';
import styles from './Question.module.css';

type QuestionProps = {
  isQuestionOpen: boolean
}

function Question({ isQuestionOpen }: QuestionProps): JSX.Element {
  const questionLineRef = useRef<HTMLLIElement | null>(null);
  const questionTextRef = useRef<HTMLParagraphElement | null>(null);
  const [isOpen, setIsOpen] = useState(isQuestionOpen);

  useEffect(() => {
    const questionsLineElem = questionLineRef.current;
    const questionTextElem = questionTextRef.current;
    
    let svgBorder: SVGBorder;

    if (questionTextElem) {
      if (
        isOpen
      ) {
        questionTextElem.style.display = 'block';
      } else {
      questionTextElem.style.display = 'none';
      }
    }

    if (questionsLineElem) {
      svgBorder = renderBroderForQuestionsLineElem(questionsLineElem);
    }

    return () => {
      svgBorder.destroy();
    }
  }, [isOpen]);

  const handlerSpanClick = () => setIsOpen(!isOpen)

  return (
    <li className={styles['questions__line']} ref={questionLineRef}>
      <span
      className={`${styles['questions__open']}
      ${isOpen ? styles['active'] : ''}`}
      onClick={handlerSpanClick}
      ></span>
      <h4 className={styles['questions__title']}>What is the price?</h4>
      <p className={styles['text']} ref={questionTextRef}>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
    </li>
  );
}

export default Question;