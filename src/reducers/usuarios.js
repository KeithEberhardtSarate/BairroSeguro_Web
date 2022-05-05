const INTIAL_STATE = {
  usuarios: [],
  isModalOpen: true,
  loading: true,
};


export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_USUARIOS':
        debugger
        return { ...state, isModalOpen: false, usuarios: action.payload };
        case 'SHOW_LOADER':
          return { ...state, loading:true };
        case 'HIDE_LOADER':
          return { ...state, loading:false };
      default:
        return state;
    }
  };
  