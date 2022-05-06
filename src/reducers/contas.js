const INTIAL_STATE = {
  contas: [],
  loading: true,
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_CONTAS':
        return { ...state, contas: action.payload };
      case 'SHOW_LOADER':
        return { ...state, loading:true };
      case 'HIDE_LOADER':
        return { ...state, loading:false };
      case 'ATIVA_CONTA':
        return state;
      case 'DESATIVA_CONTA':
        return state;
      default:
        return state;
    }
  };
  