// utils/favorites.js
export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (productId) => {
  const favorites = getFavorites();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFavorite = (productId) => {
  let favorites = getFavorites();
  favorites = favorites.filter((id) => id !== productId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
