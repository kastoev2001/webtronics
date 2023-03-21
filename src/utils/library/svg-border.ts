import {
	SVGStopAttribute,
	SVGAttributes,
	SVGSTopsAtrubuites as SVGSTopsAtrubuites,
	SVGLinearGradientAttributes,
	SVGStopElements,
	SVGPathAttributes,
	SVGBroderParams,
	SVGClipPathAttrubiute,
} from '../../types/svg-border';

const removeElement = (element: Element | null): void => {
	if (element instanceof Element) {
		element.remove();
	}
}

export default class SVGBorder {
	private containerElem: HTMLElement;

	private svgElement: SVGSVGElement;
	public svgPathElement: SVGPathElement;
	private svgLinearGradientElement: SVGLinearGradientElement;
	private svgStopsElements: SVGStopElements;
	private svgClipPathElement: SVGClipPathElement;
	private elementForSliping: null | HTMLElement;

	private svgAttributes: SVGAttributes;
	private svgPathAttributes: SVGPathAttributes;
	private svgLinearGradientAttributes: SVGLinearGradientAttributes;
	private svgStopsAtrubuites: SVGSTopsAtrubuites;
	private svgClipPathAttribute: null | SVGClipPathAttrubiute;

	public isInited = false;

	constructor(params: SVGBroderParams) {
		this.containerElem = params.containerElem;
		this.svgAttributes = params.svgAttributes;
		this.svgPathAttributes = params.svgPathAttributes;
		this.svgLinearGradientAttributes = params.svgLinearGradientAttributes;
		this.svgStopsAtrubuites = params.svgStopsAtrubuites;
		this.svgClipPathAttribute = params.svgClipPathAttribute ? params.svgClipPathAttribute : null;
		this.elementForSliping = params.elementForSliping ? params.elementForSliping : null;
	}

	public init = (): void => {
		this.createSVGLinearGradientElement();
		this.createSvgStopElements();
		this.createSVGElement();
		this.createSVGPathElement();

		this.render();

		this.isInited = true;
	}

	public destroy = (): void => {
		removeElement(this.svgElement);
		removeElement(this.svgPathElement);
		removeElement(this.svgLinearGradientElement);
		this.svgStopsElements.forEach((svgStopElement): void => removeElement(svgStopElement));
		removeElement(this.svgClipPathElement);
		removeElement(this.elementForSliping);
	}

	public reset = (): void => {
		this.destroy();
		this.init();
	}

	public changeSvgPathElement = (svgPathAttributes: SVGPathAttributes): void => {
		const svgPathAttributeKeys = Object.keys(svgPathAttributes) as (keyof SVGPathAttributes)[];

		svgPathAttributeKeys.forEach((key) => {
			if (svgPathAttributes[key]) {
				this.svgPathElement.setAttribute(key, String(svgPathAttributes[key]));
			}
		});
	}

	private render = () => {
		this.svgStopsElements.forEach((svgStopElement: SVGStopElement): void => {
			this.svgLinearGradientElement.append(svgStopElement);
		})

		if (this.svgClipPathAttribute) {
			this.createSvgClipPathElement();

			this.svgClipPathElement.append(this.svgPathElement);
			this.svgElement.append(this.svgLinearGradientElement, this.svgClipPathElement);

			if (this.elementForSliping) {
				this.elementForSliping.style.clipPath = `url(#${this.svgClipPathAttribute.id})`;

			}

		} else {
			this.svgElement.append(this.svgLinearGradientElement, this.svgPathElement);
		}

		this.containerElem.append(this.svgElement);
	}

	private createSvgClipPathElement = () => {
		const svgClipPathElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'clipPath'
		);

		if (this.svgClipPathAttribute) {
			const svgClipPathAttributeKeys = Object.keys(this.svgClipPathAttribute) as (keyof SVGClipPathAttrubiute)[];

			svgClipPathAttributeKeys.forEach((key): void => {
				const svgClipPathAttribute = this.svgClipPathAttribute as SVGClipPathAttrubiute

				svgClipPathElement.setAttribute(key, String(svgClipPathAttribute[key]));
			});

			this.svgClipPathElement = svgClipPathElement;
		}
	}

	private createSVGElement = (): void => {
		const svgElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);
		const svgAttributeKeys = Object.keys(this.svgAttributes) as (keyof SVGAttributes)[];

		svgAttributeKeys.forEach((key: keyof SVGAttributes): void => {
			svgElement.setAttribute(key, String(this.svgAttributes[key]));
		})

		this.svgElement = svgElement;
	}
	private createSVGPathElement = (): void => {
		const svgPathElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);
		const svgPathAttributeKyes = Object.keys(this.svgPathAttributes) as (keyof SVGPathAttributes)[];

		svgPathAttributeKyes.forEach((key): void =>
			svgPathElement.setAttribute(key, String(this.svgPathAttributes[key]))
		);

		this.svgPathElement = svgPathElement;
	}
	private createSVGLinearGradientElement = (): void => {
		const svgLinearGradientElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'linearGradient'
		);

		const svgLinearGradientAttributeKeys = Object.keys(this.svgLinearGradientAttributes) as (keyof SVGLinearGradientAttributes)[]

		svgLinearGradientAttributeKeys.forEach((key) => svgLinearGradientElement.setAttribute(key, String(this.svgLinearGradientAttributes[key])));

		this.svgLinearGradientElement = svgLinearGradientElement;
	}
	private createSvgStopElements = (): void => {
		const svgStopElements = this.svgStopsAtrubuites.map((svgStopAttribute): SVGStopElement => {
			const svgStopElement = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'stop'
			);
			const svgStopAttributeKeys = Object.keys(svgStopAttribute) as (keyof SVGStopAttribute)[]

			svgStopAttributeKeys.forEach((key) => svgStopElement.setAttribute(key, svgStopAttribute[key]));

			return svgStopElement;
		});

		this.svgStopsElements = svgStopElements;
	}
};