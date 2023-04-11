import { useContext } from 'react';

import { EntriesContext } from '../contexts/Entries';

export function useEntries() {
  return useContext(EntriesContext);
}
