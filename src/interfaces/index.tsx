type TypeProps = 'video' | 'slide';
type CategoryProps = 'Internal' | 'Confidential';

export type DataProps = {
   title?: string;
   category: CategoryProps;
   type: TypeProps;
   text: string;
   quantity: string;
   imageSrc: StaticImageData;
   imageAlt: string;
   lastContent: boolean;
}

export interface DataArrayProps {
   values: Array<DataProps>;
}