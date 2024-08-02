export interface Product {
    age_max: number;
    age_min: number;
    product_id: string;
    product_name: string;
    category_id: string;
    description: string;
    made_in: string;
    color: string[];
    image_url: string[] | null;
    size: string[];
    count: number;
    cost: number;
    discount: number;
    for_gender: string;
    liked: boolean;
    basket: boolean;
  } 