const inputReducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };

    case 'number':
      return { ...state, number: action.payload };

    case 'reset':
      return { ...action.payload };

    default:
      return state;
  }
};

export default inputReducer;
