import { useLayoutEffect, useRef } from 'react';
import { renderBroderForTechnologiesElem } from '../../utils/render';

import styles from './Technologie.module.css';

type TechnologieProps = {
	technologie: string
}

function Technologie({ technologie }: TechnologieProps): JSX.Element {
	const technologieValue = `${technologie[0].toUpperCase()}${technologie.slice(1)}`;

	const technologieRef = useRef<null | HTMLLIElement>(null);

	useLayoutEffect(() => {
		const technologieElement = technologieRef.current;

		if (technologieElement) {
			renderBroderForTechnologiesElem(technologieElement);
		}

	}, [technologieRef]);

	return (
		<li className={styles['technologies__line']} ref={technologieRef}>
			<div className={styles['technologies__icon-wrapper']}>
				<img className={styles['technologies__icon']} src={`./images/icons/${technologie}.png`} />
			</div>
			<h4 className={styles['technologies__title']}>{technologieValue}</h4>
		</li>
	);
}

export default Technologie;