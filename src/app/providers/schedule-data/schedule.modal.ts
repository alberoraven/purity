export interface ISchedule {
    id?: number;
    role: string;
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
