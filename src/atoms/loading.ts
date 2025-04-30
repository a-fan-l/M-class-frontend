import { atom } from 'jotai';

// Loading state atom
export const loadingStateAtom = atom<boolean>(true);

// Finished state atom
export const finishedStateAtom = atom<boolean>(false);

// Combined loading state atom
export const loadingAtom = atom(
  (get) => ({
    state: get(loadingStateAtom),
    finished: get(finishedStateAtom),
  }),
  (get, set, newState: { state: boolean; finished: boolean }) => {
    set(loadingStateAtom, newState.state);
    set(finishedStateAtom, newState.finished);
  }
); 