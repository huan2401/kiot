

const initState = {
  age: 18,
}

const reducer = ( state = initState, action: any) => {
  switch (action.type) {
    case "incre_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "decre_age": {
      return {
        ...state,
        age: state.age - 1,
      };
    }
    default: return state;
  }
};

export default reducer;
