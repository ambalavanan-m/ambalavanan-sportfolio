import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    setRating?: (rating: number) => void;
    interactive?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, interactive = false }) => {
    const stars = [1, 2, 3, 4, 5];

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, starValue: number) => {
        if (!interactive || !setRating) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        // If clicked on the left half, it's a .5 rating for that star (e.g., 4th star left half = 3.5)
        // Wait, if it's the 1st star, left half = 0.5, right half = 1.0
        // If it's the 5th star, left half = 4.5, right half = 5.0
        const isHalf = x < width / 2;
        const newRating = isHalf ? starValue - 0.5 : starValue;
        setRating(newRating);
    };

    return (
        <div className="flex gap-1 items-center">
            {stars.map((star) => {
                const isFull = star <= rating;
                const isHalf = !isFull && star - 0.5 <= rating;

                return (
                    <div
                        key={star}
                        onClick={(e) => handleClick(e, star)}
                        className={`relative ${interactive ? 'cursor-pointer transform hover:scale-110 active:scale-95' : 'cursor-default'} transition-all duration-200`}
                    >
                        <Star
                            size={24}
                            className={`${isFull ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
                        />
                        {isHalf && (
                            <div className="absolute inset-0 overflow-hidden w-1/2">
                                <Star
                                    size={24}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            </div>
                        )}
                    </div>
                );
            })}
            {interactive && (
                <span className="ml-2 text-sm font-bold text-slate-500 min-w-[2.5rem]">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};

export default StarRating;
