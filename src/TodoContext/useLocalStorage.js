import React from "react";


function useLocalStorage(itemName, initialValue){
  // last states used:
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

  const {
    loading,
    error,
    item,
  } = state;

  // Action creators
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error});
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem});
  const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem});

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        onSuccess(parsedItem)
      } catch (error){
        onError(error)
      }
    }, 1000)
  }, []);

  const saveItem = newItems => {
    try {
      const stringifiedItem = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItems);
    } catch (error) {
      onError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

const initialState = ({ initialValue }) => ({
  // We use a function in order to extract the initial value from the function
  loading: true,
  error: false,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
}

const reducer = (state, action) => {
  switch (action.type){
    case actionTypes.error:
      return {
        ...state,
        error: true,
      }
    case actionTypes.success:
      return {
        ...state,
        error:false,
        loading: false,
        item: action.payload,
      }
    case actionTypes.save:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}

export { useLocalStorage };