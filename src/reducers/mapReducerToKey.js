import { Map } from 'immutable'

export function mapReducerToKey({ mapActionToKey, reducer }) {
  return (state = Map({}), action) => {
    const key = mapActionToKey(action)
    if (key == null) return state
    if (typeof key != 'string') throw new Error('Expected key to be a string')
    const newValue = reducer(state.get(key), action)
    return state.set(key, newValue)
  };
}