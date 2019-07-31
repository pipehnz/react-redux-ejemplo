export const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_NUMERO':
      return state.numero
      break;
    case 'INCREMENT_NUMERO':
      return {
        ...state,
        numero: state.numero + action.payload
      }
    default:
      return state
  }
}