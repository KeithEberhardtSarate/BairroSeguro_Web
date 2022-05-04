import { combineReducers } from 'redux';
import contas from './contas';
import usuarios from './usuarios';

export default combineReducers({
  contas: contas,
  usuarios: usuarios
});
