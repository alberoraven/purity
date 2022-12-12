export interface IService {
    id: number;
    name?: string;
    description?: string;
    duration?: string | number;
    is_active?: boolean;
    price?: string;
    ratings?: number;
    reviews_count?: string;
    share_amount?: string;
    image?: string
}