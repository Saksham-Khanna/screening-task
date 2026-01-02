const KEY = "keepShopping";

export const saveSearch = (product) => {
  const existing = JSON.parse(localStorage.getItem(KEY)) || [];
  const updated = [
    product,
    ...existing.filter((p) => p.id !== product.id),
  ].slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(updated));
};

export const getSavedSearches = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};
