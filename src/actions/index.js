import jsonPlaceHolder from '../apis/jsonPlaceholder'

// export const fetchContasAndUsuarios = () => async (dispatch, getState) => {
//     await dispatch(fetchPosts());
  
//     _.chain(getState().contas)
//       .map('idMoradorPrincipal')
//       .uniq()
//       .forEach(id => dispatch(fetchUsuario(id)))
//       .value();
// };

export const fetchContas = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/conta');   
  
    dispatch({ type: 'FETCH_CONTAS', payload: response.data });
};

export const fetchUsuarios = id => async dispatch => {
    const response = await jsonPlaceHolder.get('/usuario');
  
    dispatch({ type: 'FETCH_USUARIOS', payload: response.data });
};

// export const fetchUsuario = id => async dispatch => {
//     const response = await jsonPlaceholder.get(`/usuario/${id}`);
  
//     dispatch({ type: 'FETCH_USUARIOS', payload: response.data });
// };