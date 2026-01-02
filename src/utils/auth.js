const USER_KEY = "shopease_user";

export const registerUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const loginUser = (email, password) => {
  const savedUser = JSON.parse(localStorage.getItem(USER_KEY));

  if (!savedUser) return false;

  return (
    savedUser.email === email &&
    savedUser.password === password
  );
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY));
};

export const logoutUser = () => {
  localStorage.removeItem(USER_KEY);
};
