import { Middleware } from 'redux';

// this part is not implemented, if you want Middleware, implement it
export const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
