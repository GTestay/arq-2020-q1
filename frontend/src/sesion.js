import * as Cookies from 'js-cookie';

export const guardarSession = (session) => {
  Cookies.set('sesion', JSON.stringify(session));
};

export const obtenerSession = () => {
  return JSON.parse(Cookies.get('sesion') ?? false);
};