import SVGBorder from './library/svg-border';

import { nanoid } from 'nanoid';
import { sizeIdUnique } from '../const';

import stylesTechnologie from '../components/technologie/Technologie.module.css';
import stylesReview from '../components/review/Review.module.css'

import {
	SVGAttributes,
	SVGSTopsAtrubuites,
	SVGLinearGradientAttributes,
	SVGPathAttributes,
	SVGClipPathAttrubiute,
	SVGBroderParams,
	SVGBorderOptions
} from '../types/svg-border';

export const renderBroderForTechnologiesElem = (technologiesLineElem: HTMLElement): void => {
	const TechnologieImageClass = `.${stylesTechnologie['technologies__icon']}`;
	const technologiesImageElem: HTMLImageElement = technologiesLineElem.querySelector(TechnologieImageClass) as HTMLImageElement;
	const idUnique = nanoid(sizeIdUnique);

	let width = technologiesLineElem.clientWidth;
	let height = technologiesLineElem.clientHeight;
	let isImageComplete = technologiesImageElem.complete;
	let setedInterval: NodeJS.Timer;

	const svgAttributes: SVGAttributes = {
		viewBox: `0 0 ${width}, ${height}`,
		width: width,
		height: height,
		style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height};
      z-index: -1
    `,
	};

	const svgPathAttributes: SVGPathAttributes = {
		d: `M 15,5h ${width - 32} c 5,0 15,1 15,13 v ${height - 61} q -1,5 -2,7 l 0,0 -40,30  q -5,5 -10,5 h${-width + 71} c -5,0 -15,-1 -15,-13 v ${-height + 35} c 0,-5 1,-14 13,-16 z`,
		fill: 'rgba(255, 255, 255, 0.05)',
		stroke: `url(#technologen-border-gradient${idUnique})`,
		'stroke-width': 1,
	};

	const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
		id: `technologen-border-gradient${idUnique}`,
		x1: '0',
		y1: '0',
		x2: '100%',
		y2: '100%',
	};

	const svgStopsAtrubuites: SVGSTopsAtrubuites = [
		{
			offset: '0',
			'stop-color': '#15BFFD',
		},
		{
			offset: '100%',
			'stop-color': '#9C37FD',
		}
	];

	const svgBorder = new SVGBorder({
		containerElem: technologiesLineElem,
		svgAttributes,
		svgPathAttributes,
		svgLinearGradientAttributes,
		svgStopsAtrubuites
	});

	if (isImageComplete) {
		svgBorder.init();
	} else {
		setedInterval = setInterval(() => {
			isImageComplete = technologiesImageElem.complete;

			if (isImageComplete) {
				clearInterval(setedInterval);

				renderBroderForTechnologiesElem(technologiesLineElem);

			}
		}, 100);
	}
}

export const renderBroderForTechnologiesElems = (technologiesLinesElems: NodeListOf<HTMLElement>): void => {
	technologiesLinesElems.forEach(renderBroderForTechnologiesElem);
};

export const renderBroderForStepsCardsElems = (stepsCardsElems: NodeListOf<HTMLElement>): void => {
	stepsCardsElems.forEach((stepCardElem, i): void => {
		const width = stepCardElem.clientWidth;
		const height = stepCardElem.clientHeight;
		const idUnique = nanoid(sizeIdUnique);


		const svgAttributes: SVGAttributes = {
			viewBox: `0 0 ${width}, ${height}`,
			width: width,
			height: height,
			style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height}px;
      z-index: -1
    `,
		};

		const svgPathAttributes: SVGPathAttributes = {
			d: `M 15,5
    h ${width - 32}
    c 5,0 15,1 15,13
    v ${height - 35}
    c 0,5 -1,15 -13,15
    h${-width + 32} c -5,0 -15,-1 -15,-13 v ${-height + 35} c 0,-5 1,-15 13,-15 z`,
			fill: 'rgba(255, 255, 255, 0.05)',
			stroke: `url(#step-border-gragient${idUnique})`,
			'stroke-width': 1,
		};

		const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
			id: `step-border-gragient${idUnique}`,
			x1: '0',
			y1: '0',
			x2: '100%',
			y2: '100%',
		};

		const svgStopsAtrubuites: SVGSTopsAtrubuites = [
			{
				offset: '0',
				'stop-color': '#15BFFD',
			},
			{
				offset: '100%',
				'stop-color': '#9C37FD',
			}
		];
		const svgBorder = new SVGBorder({
			containerElem: stepCardElem,
			svgAttributes,
			svgPathAttributes,
			svgLinearGradientAttributes,
			svgStopsAtrubuites
		});

		svgBorder.init();

		if (i % 2) {
			const width = 146;
			const height = stepCardElem.clientHeight + 30;
			const svgAttributeOuterBorder: SVGAttributes = {
				viewBox: `0 0 ${width}, ${height}`,
				width: width,
				height: height,
				style: `
      position: absolute;
      left: -30px;
      top: -15px;
      width: ${width}px;
      height: ${height}px;
      z-index: -1
    `,
			};

			const svgPathAttributeOuterBorder: SVGPathAttributes = {
				d: `
        M ${width},5
        h ${-width + 32}
        c -5,0 -15, 1, -15, 13
        v ${height - 35}
        c 0,5 1,15 13,15
        h ${width - 32}
      `,
				fill: 'none',
				stroke: 'url(#steps-outer-border-gradient)',
				'stroke-width': 6,
			};

			const svgLinearGradientAttributeOuterBorder: SVGLinearGradientAttributes = {
				id: 'steps-outer-border-gradient',
				x1: '0',
				y1: '50%',
				x2: '100%',
				y2: '50%',
			};

			const svgStopsAtrubuitesOuterBorders: SVGSTopsAtrubuites = [
				{
					offset: '8%',
					'stop-color': 'rgba(156, 55, 253, 0.7)',
				},
				{
					offset: '69%',
					'stop-color': 'rgba(21, 191, 253, 0.7)',
				},
				{
					offset: '98%',
					'stop-color': 'rgba(21, 191, 253, 0)',
				}
			];

			const svgBorder = new SVGBorder({
				containerElem: stepCardElem,
				svgAttributes: svgAttributeOuterBorder,
				svgPathAttributes: svgPathAttributeOuterBorder,
				svgLinearGradientAttributes: svgLinearGradientAttributeOuterBorder,
				svgStopsAtrubuites: svgStopsAtrubuitesOuterBorders
			});

			svgBorder.init();
		} else {
			const width = 146;
			const height = stepCardElem.clientHeight + 30;
			const svgAttributeOuterBorder: SVGAttributes = {
				viewBox: `0 0 ${width}, ${height}`,
				width: width,
				height: height,
				style: `
      position: absolute;
      right: -30px;
      top: -15px;
      width: ${width}px;
      height: ${height}px;
      transform: rotate(-180deg);
      z-index: -1
    `,
			};

			const svgPathAttributeOuterBorder: SVGPathAttributes = {
				d: `
        M ${width},5
        h ${-width + 32}
        c -5,0 -15, 1, -15, 13
        v ${height - 40}
        c 0,5 1,15 13,15
        h ${width - 32}
      `,
				fill: 'none',
				stroke: 'url(#steps-outer-border-gradient)',
				'stroke-width': 6,
			};

			const svgLinearGradientAttributeOuterBorder: SVGLinearGradientAttributes = {
				id: 'steps-outer-border-gradient',
				x1: '0',
				y1: '50%',
				x2: '100%',
				y2: '50%',
			};

			const svgStopsAtrubuitesOuterBorders: SVGSTopsAtrubuites = [
				{
					offset: '8%',
					'stop-color': 'rgba(156, 55, 253, 0.7)',
				},
				{
					offset: '69%',
					'stop-color': 'rgba(21, 191, 253, 0.7)',
				},
				{
					offset: '98%',
					'stop-color': 'rgba(21, 191, 253, 0)',
				}
			];

			const svgBorder = new SVGBorder({
				containerElem: stepCardElem,
				svgAttributes: svgAttributeOuterBorder,
				svgPathAttributes: svgPathAttributeOuterBorder,
				svgLinearGradientAttributes: svgLinearGradientAttributeOuterBorder,
				svgStopsAtrubuites: svgStopsAtrubuitesOuterBorders
			});

			svgBorder.init();
		}
	});
};

export const renderBroderForSliderReviewsLinesElems = (sliderReviewsLinesElems: NodeListOf<HTMLElement>): void => {
	const sliderReviewBorderClass = `.${stylesReview['slider-review__border']}`
	sliderReviewsLinesElems.forEach((sliderReviewLineElem, i) => {
		const sliderReviewBorderElem = sliderReviewLineElem.querySelector(sliderReviewBorderClass) as HTMLDivElement;
		const width = sliderReviewLineElem.clientWidth;
		const height = sliderReviewLineElem.clientHeight;
		const idUnique = nanoid(sizeIdUnique);

		const svgAttributes: SVGAttributes = {
			viewBox: `0 0 ${width}, ${height}`,
			width: width,
			height: height,
			style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height};
      z-index: 1;
    `,
		};

		const svgPathAttributes: SVGPathAttributes = {
			d: `M 16,0h ${width - 32} s 16,0 16,16 v ${height - 68} q -1,5 -2,7 l 0,0 -30,40  q -5,5 -10,5 h${-width + 58} c -5,0 -15,-1 -15,-13 v ${-height + 29} c 0,-5 1,-14 13,-16 z`,
			fill: 'none',
			stroke: `url(#review-border-gradient${idUnique})`,
			'stroke-width': 1,
		};

		const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
			id: `review-border-gradient${idUnique}`,
			x1: '0',
			y1: '0',
			x2: '100%',
			y2: '100%',
		};

		const svgStopsAtrubuites: SVGSTopsAtrubuites = [
			{
				offset: '0',
				'stop-color': '#9C37FD',
			},
			{
				offset: '100%',
				'stop-color': '#15BFFD',
			},
		];

		const svgClipPathAttribute: SVGClipPathAttrubiute = {
			id: `slider-line-${i + 1}`
		}

		const svgPathBroderAttribute: SVGPathAttributes = {
			d: `M 17,0h ${width - 34} s 16,0 16,16 v ${height - 68} q -1,5 -2,7 l 0,0 -30,40  q -5,5 -10,5 h${-width + 60} s -16,0 -16,-16 v ${-height + 32} s 0,-16 16,-16 z`,
			fill: 'none',
			stroke: 'url(#review-border-gradient)',
			'stroke-width': 1,
		};

		if (sliderReviewLineElem.classList.contains('active')) {
			const svgPathAttributes: SVGPathAttributes = {
				d: `M 16,0h ${width - 32} s 16,0 16,16 v ${height - 88} q -1,5 -2,7 l 0,0 -50,60  q -5,5 -10,5 h${-width + 78} c -5,0 -15,-1 -15,-13 v ${-height + 29} c 0,-5 1,-14 13,-16 z`,
				fill: 'none',
				stroke: 'url(#review-border-gradient)',
				'stroke-width': 1,
			};

			const svgPathBroderAttribute: SVGPathAttributes = {
				d: `M 17,1h ${width - 35} s 16,0 16,16 v ${height - 90} q -1,5 -2,7 l 0,0 -50,60  q -5,5 -10,5 h${-width + 81} s -16,0 -16,-16 v ${-height + 34} s 0,-16 16,-16 z`,
				fill: 'none',
				stroke: 'url(#review-border-gradient)',
				'stroke-width': 1,
			};

			new SVGBorder({
				containerElem: sliderReviewBorderElem,
				svgAttributes,
				svgPathAttributes: svgPathBroderAttribute,
				svgLinearGradientAttributes,
				svgStopsAtrubuites,
			}).init();

			new SVGBorder({
				containerElem: sliderReviewLineElem,
				svgAttributes,
				svgPathAttributes,
				svgLinearGradientAttributes,
				svgStopsAtrubuites,
				svgClipPathAttribute,
				elementForSliping: sliderReviewLineElem,
			}).init();
			return;
		};

		new SVGBorder({
			containerElem: sliderReviewLineElem,
			svgAttributes,
			svgPathAttributes,
			svgLinearGradientAttributes,
			svgStopsAtrubuites,
			svgClipPathAttribute,
			elementForSliping: sliderReviewLineElem,
		}).init();

		new SVGBorder({
			containerElem: sliderReviewBorderElem,
			svgAttributes,
			svgPathAttributes: svgPathBroderAttribute,
			svgLinearGradientAttributes,
			svgStopsAtrubuites,
		}).init();
	});
};

export const renderBroderForQuestionsLineElem = (questionsLineElem: HTMLElement): SVGBorder => {
	const width = questionsLineElem.clientWidth;
	const height = questionsLineElem.clientHeight;
	const idUnique = nanoid(sizeIdUnique);

	const svgAttributes: SVGAttributes = {
		viewBox: `0 0 ${width}, ${height}`,
		width: width,
		height: height,
		style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height};
      z-index: -1
    `,
	};

	const svgPathAttributes: SVGPathAttributes = {
		d: `M 30,0h ${width - 47}
    c 5,0 15,1 15,13
    v ${height - 45} l 0,0 -30,30 h${-width + 50}
    c -5,0 -15,-1 -15,-13
    v ${-height + 45}
    z`,
		fill: 'rgba(255, 255, 255, 0.05)',
		stroke: `url(#questions-border-gradient${idUnique})`,
		'stroke-width': 1,
	};

	const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
		id: `questions-border-gradient${idUnique}`,
		x1: '0',
		y1: '0',
		x2: '100%',
		y2: '100%',
	};

	const svgStopsAtrubuites: SVGSTopsAtrubuites = [
		{
			offset: '0',
			'stop-color': '#15BFFD',
		},
		{
			offset: '100%',
			'stop-color': '#9C37FD',
		}
	];

	const svgBorder = new SVGBorder({
		containerElem: questionsLineElem,
		svgAttributes,
		svgPathAttributes,
		svgLinearGradientAttributes,
		svgStopsAtrubuites
	});

	svgBorder.init();

	return svgBorder;
};

export const renderBroderForFormInputsWrappersElem = (
	formInputElem: HTMLElement,
	options?: SVGBorderOptions
	): SVGBorder => {
		const width = formInputElem.clientWidth;
		const height = formInputElem.clientHeight;
		const idUnique = nanoid(sizeIdUnique);

		const svgAttributes: SVGAttributes = {
			viewBox: `0 0 ${width}, ${height}`,
			width: width,
			height: height,
			style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height}px;
      z-index: -1
    `,
		};

		const svgPathAttributes: SVGPathAttributes = {
			d: `M 15,5
    h ${width - 32}
    c 10,0 15,0 15,10
    v ${height - 35}
    c 0,10 0,15 -10,15
    h${-width + 32} c -10,0 -15,0 -15,-10
		v ${-height + 35}
		c 0,-10 0,-15 10,-15 z`,
			fill: 'rgba(255, 255, 255, 0.05)',
			stroke: `url(#input-border-gradient-${idUnique})`,
			'stroke-width': 1,
		};

		const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
			id: `input-border-gradient-${idUnique}`,
			x1: '0',
			y1: '0',
			x2: '100%',
			y2: '100%',
		};

		const svgStopsAtrubuites: SVGSTopsAtrubuites = [
			{
				offset: '0',
				'stop-color': '#15BFFD',
			},
			{
				offset: '100%',
				'stop-color': '#9C37FD',
			}
		];

		const svgBorderOptions: SVGBroderParams = {
			containerElem: formInputElem,
			svgAttributes,
			svgPathAttributes,
			svgLinearGradientAttributes,
			svgStopsAtrubuites,
			...options
		};

		const svgBorder = new SVGBorder(svgBorderOptions);

		svgBorder.init();

		return svgBorder;
};

export const renderBorderforCotactsUsElem = (contactUsWrapperElem: HTMLElement): void => {
	const width = contactUsWrapperElem.clientWidth;
	const height = contactUsWrapperElem.clientHeight;
	const idUnique = nanoid(sizeIdUnique);

	const svgAttributes: SVGAttributes = {
		viewBox: `0 0 ${width}, ${height}`,
		width: width,
		height: height,
		style: `
      position: absolute;
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${height}px;
      z-index: -1
    `,
	};

	const svgPathAttributes: SVGPathAttributes = {
		d: `M 15,5
    h ${width - 32}
    c 5,0 15,1 15,13
    v ${height - 35}
    c 0,5 -1,15 -13,15
    h${-width + 32} c -5,0 -15,-1 -15,-13 v ${-height + 35} c 0,-5 1,-15 13,-15 z`,
		fill: 'rgba(255, 255, 255, 0.05)',
		stroke: `url(#steps-border-gradient-${idUnique})`,
		'stroke-width': 1,
	};

	const svgLinearGradientAttributes: SVGLinearGradientAttributes = {
		id: `steps-border-gradient-${idUnique}`,
		x1: '0',
		y1: '0',
		x2: '100%',
		y2: '100%',
	};

	const svgStopsAtrubuites: SVGSTopsAtrubuites = [
		{
			offset: '0',
			'stop-color': '#15BFFD',
		},
		{
			offset: '100%',
			'stop-color': '#9C37FD',
		}
	];

	const svgBorder = new SVGBorder({
		containerElem: contactUsWrapperElem,
		svgAttributes,
		svgPathAttributes,
		svgLinearGradientAttributes,
		svgStopsAtrubuites
	});

	svgBorder.init();
};