const ALPHABET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ID_LENGTH = 8;

export const generateShortId = () => {
  var id = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return id;
};
