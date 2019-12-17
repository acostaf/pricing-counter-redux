import { handleActions } from 'redux-actions';
import { addItem } from '../actions/index';

export const reducer = handleActions(
  {
    [addItem]: (state, { payload }) => {
      const existing = state.items.find(x => x.code === payload.code);
      if (existing) payload.old = existing.price;
      return { ...state, items: [...state.items.filter(y => y.code !== payload.code), payload] };
    }
  },
  { items: [] }
);
