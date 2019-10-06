import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

export const saveKey = (key, value) => {
  if (Object.getPrototypeOf(value) === Object.prototype) {
    ls.set(key, JSON.stringify(value));
  } else {
    ls.setItem(key, value);
  }
};

export const getKey = (key) => {
  const value = ls.get(key);
  if (!value)
    throw new Error('missing_key');

  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
};

export const deleteKey = (key) => {
  ls.remove(key);
};
