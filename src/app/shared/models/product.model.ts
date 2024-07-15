export interface Product {
  id: number;
  obviously: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  shortDescription: string;
  slider_img: { image: string }[];
  photo: string;
  composition: {
    extract: string;
    folicAcid: string;
    vitaminB6: string;
    vitaminB1: string;
    vitaminB12: string;
    magnesium: string;
  };
  recommendations: string;
  symptoms: string;
  advantages: string[];
  clinicalExperience: string;
  usageInstructions: string;
  warnings: string;
  ageRestrictions: string;
  packagingAndStorage: string;
  manufacturer: string;
  importer: string;
  productQuantity: number;
}

export interface ChosenProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  productQuantity: number;
}
