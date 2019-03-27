import { Action } from '../reducers/counter';

const action: Action = {
  type: 'INCREMENT',
  value: 1,
};

export function increment() {
  return (dispatch: Function) => {
    dispatch(action);
  };
}

export function incrementAsync() {
  return (dispatch: Function) => {
    const onTimeout = () => {
      dispatch(action);
    };
    setTimeout(onTimeout, 1000);
  };
}
