import * as Cookies from 'js-cookie';

const SESSION_KEY = 'sesion-insumos-medicos';

export const guardarSession = (session) => {
  Cookies.set(SESSION_KEY, JSON.stringify(session));
};

export const obtenerSession = () => {
  return JSON.parse(Cookies.get(SESSION_KEY) ?? false);
};

export const eliminarSession = () => {
  Cookies.remove(SESSION_KEY);
};