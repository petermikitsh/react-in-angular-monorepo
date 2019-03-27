export interface Action {
  type: string;
  value: number;
}

export default function counter(state = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value;
    default:
      return state;
  }
}
