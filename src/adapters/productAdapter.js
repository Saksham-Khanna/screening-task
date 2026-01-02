export const adaptProduct = (apiProduct) => {
  return {
    id: apiProduct.id || apiProduct.productId,
    title: apiProduct.title || apiProduct.name,
    price: apiProduct.price || apiProduct.finalPrice,
    mrp: apiProduct.mrp || apiProduct.originalPrice || null,
    rating: apiProduct.rating || 4,
    reviews: apiProduct.reviews || 0,
    badge: apiProduct.badge || (apiProduct.offers ? apiProduct.offers[0] : ""),
    image: apiProduct.image || "https://via.placeholder.com/300x200",
  };
};
