const apiKey = 'HeN23-X4c5t7jbUWBhQd92d872RBDsVK001AaMl8VkTfWlPSqyqrGK59xf7GRZO0aiNwEmDsp5IcwMbfsH6E3HNeW5A7g0tUKJwMAZ61yy1PIj0ODcv_C2_qJUkKXnYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        });
    }
};

export default Yelp;
