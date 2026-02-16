
import { Activity } from './types';

export const ACTIVITIES: Activity[] = [
    {
        id: '1',
        title: 'Desert Safari & BBQ Dinner',
        location: 'Dubai, UAE',
        price: 85,
        rating: 4.9,
        reviews: '1.2k',
        image: 'https://picsum.photos/600/400?random=10',
        category: 'Adventure',
        duration: '6h',
        tags: ['Must-Try']
    },
    {
        id: '2',
        title: 'Swiss Alps Tandem Paraglide',
        location: 'Interlaken, Switzerland',
        price: 120,
        rating: 4.9,
        reviews: '850',
        image: 'https://picsum.photos/600/400?random=para',
        category: 'Adventure',
        duration: '2h',
        tags: ['Top Rated']
    },
    {
        id: '3',
        title: 'Sushi Making Workshop',
        location: 'Tokyo, Japan',
        price: 65,
        rating: 4.8,
        reviews: '500',
        image: 'https://picsum.photos/600/400?random=sushi',
        category: 'Workshops',
        duration: '3h',
        tags: ['Nut-Free Certified']
    }
];
