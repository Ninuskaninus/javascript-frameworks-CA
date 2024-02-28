import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();

                // Organize data into your own object
                const products = result.data.map(product => ({
                    id: product.id,
                    title: product.title,
                    imageUrl: product.image.url,
                    imageAlt: product.image.alt,
                    price: product.price,
                    discount: product.discountedPrice,
                    description: product.description,
                    tags: product.tags,
                    rating: product.rating,
                    reviews: product.reviews.map(review => ({
                        id: review.id,
                        username: review.username,
                        description: review.description,
                        rating: review.rating,
                    })),
                }));

                setData(products);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading, isError };
}
