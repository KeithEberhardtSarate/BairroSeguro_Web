import { combineReducers } from 'redux';
import contas from './contas';
import usuarios from './usuarios';
import dashboard from './dashboard';

export default combineReducers({
  contas: contas,
  usuarios: usuarios,
  dashboard: dashboard,
});
