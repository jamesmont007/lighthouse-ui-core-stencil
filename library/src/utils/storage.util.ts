const getData = (key: string) => {
  const user = localStorage.getItem(key);
  return user ? JSON.parse(user) : undefined;
};

const setData = (key: string, value: any): void => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};

const removeData = (key: string) => {
  localStorage.removeItem(key);
};

export { getData, setData, removeData };
