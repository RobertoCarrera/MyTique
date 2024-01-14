import { Category } from "./category.model";

export interface Outcome {

    category: Category;
    quantity: number;
    limit?: number;
    percentage?: number;
    date?: Date;
};