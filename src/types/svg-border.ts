export type SVGAttributes = {
	viewBox: string,
	width: number,
	height: number,
	style: string,
};

export type SVGPathAttributes = {
	d: string,
	fill?: string,
	stroke?: string,
	'stroke-width'?: number,
};
export type SVGLinearGradientAttributes = {
	id: string,
	x1: string,
	y1: string,
	x2: string,
	y2: string,
};
export type SVGStopAttribute = {
	offset: string,
	'stop-color': string,
};

export type SVGSTopsAtrubuites = SVGStopAttribute[];
export type SVGStopElements = SVGStopElement[];

export type SVGClipPathAttrubiute = {
	id: string,
};

export type SVGBroderParams = {
	containerElem: HTMLElement,
	svgAttributes: SVGAttributes,
	svgPathAttributes: SVGPathAttributes,
	svgLinearGradientAttributes: SVGLinearGradientAttributes,
	svgStopsAtrubuites: SVGSTopsAtrubuites,
	svgClipPathAttribute?: SVGClipPathAttrubiute,
	elementForSliping?: HTMLElement,
};

export type SVGBorderOptions = Partial<SVGBroderParams>;