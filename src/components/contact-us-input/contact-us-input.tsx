import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { renderBroderForFormInputsWrappersElem } from '../../utils/render';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SVGBorder from '../../utils/library/svg-border';

import styles from './ContactUsInput.module.css';

type ContactUsInputProps = {
	inputAttributes: InputHTMLAttributes<HTMLInputElement>,
	isInputValid: boolean
}


function ContactUsInput({inputAttributes, isInputValid}: ContactUsInputProps): JSX.Element {
	const formInputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		
		const formInputElem = formInputRef.current;

		let svgBorderInstance: SVGBorder;
		
		if (
			formInputElem
		) {
			const width = formInputElem.clientWidth;
			const height = formInputElem.clientHeight;

			if (
				!isInputValid
			) {
				svgBorderInstance = renderBroderForFormInputsWrappersElem(formInputElem, {
					svgStopsAtrubuites: [
						{
							offset: '0',
							'stop-color': 'red',
						},
						{
							offset: '100%',
							'stop-color': 'red',
						}
					],
					svgPathAttributes: {
						d: `M 15,5
					h ${width - 32}
					c 10,0 15,0 15,10
					v ${height - 35}
					c 0,10 0,15 -10,15
					h${-width + 32} c -10,0 -15,0 -15,-10
					v ${-height + 35}
					c 0,-10 0,-15 10,-15 z`,
						fill: 'rgba(255, 165, 165, 0.2)',
						stroke: 'url(#input-border-gradient)',
						'stroke-width': 1,
					},
					svgLinearGradientAttributes: {
						id: 'input-border-gradient',
						x1: '0',
						y1: '0',
						x2: '100%',
						y2: '100%',
					}
				});
			} else {
			svgBorderInstance =  renderBroderForFormInputsWrappersElem(formInputElem);
			}
		}
		return () => {
			svgBorderInstance.destroy();
		}
	}, [isInputValid])

	return (
		<div className={styles['form__input-wrapper']} ref={formInputRef}>
			<input className={styles['form__input']} {...inputAttributes} />
		</div>
	);
}

export default ContactUsInput;