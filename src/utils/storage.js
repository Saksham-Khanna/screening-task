const KEY = "keepShopping";

export const saveItem = (item) => {
  const list = JSON.parse(localStorage.getItem(KEY)) || [];
  const updated = [item, ...list.filter(i => i.id !== item.id)].slice(0, 5);
  localStorage.setItem(KEY, JSON.stringify(updated));
};

export const getItems = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];
