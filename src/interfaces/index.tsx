type TypeProps = 'video' | 'slide' | 'podcast';
type CategoryProps = 'Internal' | 'Confidential';

export type DataProps = {
   onHigh: boolean;
   category?: CategoryProps;
   type: TypeProps;
   text: string;
   quantity: string;
   imageSrc: StaticImageData;
   imageAlt: string;
   informationText: string;
   informationTime?: number;
}

export interface DataArrayProps {
   title?: string;
   firstTitle?: boolean;
   lastTitle?: boolean;
   values: Array<DataProps>;
}

type Slide = {
   alt: string;
   path: string;
}

export interface SlidesProps {
   slides: Array<Slide>;
}