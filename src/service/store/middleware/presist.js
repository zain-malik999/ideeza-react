const log = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};
export { log };
