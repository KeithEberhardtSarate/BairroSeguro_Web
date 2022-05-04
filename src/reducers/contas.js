export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTAS':
        return action.payload;
      default:
        return state;
    }
  };
  