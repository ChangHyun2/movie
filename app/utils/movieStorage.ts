export const movieStorage = {
  set: (key: string, value: any) =>
    window.localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => {
    const value = window.localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return value;
  },
};
