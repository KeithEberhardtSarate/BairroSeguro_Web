const INTIAL_STATE = {
  usuarios: [],
  isModalOpen: false,
  loading: true,
  novoUsuarioForm: {
    "nome": '',
    "email": '',
    "telefone": '',
    "rua": '',
    "numero": '',
    "bairro": '',
    "cep": '',
    "cidade": '',
    "estado": '',
    "uf": '',
    "nomeUsuario": '',
    "senha": '',
    "tipo": '',
  }
};


export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_USUARIOS':
        return { ...state, isModalOpen: false, usuarios: action.payload };
      case 'SHOW_LOADER':
        return { ...state, loading:true };
      case 'HIDE_LOADER':
        return { ...state, loading:false };
      case 'OPEN_NOVO_USUARIO_MODAL':
        return { ...state, isModalOpen:true };
      case 'CLOSE_NOVO_USUARIO_MODAL':
        return { ...state, isModalOpen:false };
      case 'SAVE_USUARIO_STATE':
        return { ...state, novoUsuarioForm: action.payload};
      case 'CREATE_USUARIO':
        return state;
      default:
        return state;
    }
  };
  