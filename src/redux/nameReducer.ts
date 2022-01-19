

const initState = {
    name: 'MPEC',
  }
  
  const NameReducer = ( state = initState, action: any) => {
    switch (action.type) {
      case "set_name": {
        return {
          ...state,
          name: action.payload,
        };
      }
      default: return state;
    }
  };
  
  export default NameReducer;
  