import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export enum MaskState {
  init,
  loading,
  loaded,
}

// Initial state
const initialState = {
  loading: {
    state: true,
    gmask: MaskState.init,
  },
  finished: false,
};

// Create atoms with storage
export const loadingStateAtom = atomWithStorage<boolean>(
  'global-store-loading-state',
  initialState.loading.state
);

export const maskStateAtom = atomWithStorage<MaskState>(
  'global-store-mask-state',
  initialState.loading.gmask
);

export const finishedStateAtom = atomWithStorage<boolean>(
  'global-store-finished',
  initialState.finished
);

// Derived atom for the complete loading state
export const loadingAtom = atom(
  get => ({
    state: get(loadingStateAtom),
    gmask: get(maskStateAtom),
  }),
  (get, set, newState: { state: boolean; gmask: MaskState }) => {
    set(loadingStateAtom, newState.state);
    set(maskStateAtom, newState.gmask);
  }
);

// Export the complete state atom
export const globalStateAtom = atom(
  get => ({
    loading: get(loadingAtom),
    finished: get(finishedStateAtom),
  }),
  (
    get,
    set,
    newState: {
      loading: { state: boolean; gmask: MaskState };
      finished: boolean;
    }
  ) => {
    set(loadingAtom, newState.loading);
    set(finishedStateAtom, newState.finished);
  }
);
