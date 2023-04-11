import { ReactNode, createContext, useEffect, useState } from 'react';

export interface Entry {
  id: string;
  description: string;
  value: number;
  type: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface RawEntry {
  date: string;
  description: string;
  value: string;
  type: 'in' | 'out';
}

export interface EntriesContextData {
  credits: number;
  debits: number;
  total: number;
  entries: Entry[];
  addEntry: (entry: RawEntry) => Promise<void>;
  removeEntry: (entryId: string) => Promise<void>;
}

export interface EntriesProviderProps {
  children: ReactNode;
}

export const EntriesContext = createContext({} as EntriesContextData);

export function EntriesProvider({ children }: EntriesProviderProps) {
  const [credits, setCredits] = useState(0);
  const [debits, setDebits] = useState(0);
  const [total, setTotal] = useState(0);
  const [entries, setEntries] = useState<Entry[]>([]);

  async function addEntry(rawEntry: RawEntry) {
    const entry = await window.api.entries.createEntry(rawEntry);

    setEntries((currentEntries) => {
      return [...currentEntries, entry].sort((a, b) => Number(b.date) - Number(a.date));
    });
  }

  async function removeEntry(entryId: string) {
    await window.api.entries.removeEntry(entryId);

    setEntries((currentEntries) => {
      return currentEntries.filter((entry) => entry.id !== entryId);
    });
  }

  useEffect(() => {
    window.api.entries.getEntries().then(setEntries);
  }, []);

  useEffect(() => {
    window.api.entries.getCredits().then(setCredits);
    window.api.entries.getDebits().then(setDebits);
    window.api.entries.getTotal().then(setTotal);
  }, [entries]);

  return (
    <EntriesContext.Provider value={{ credits, debits, total, entries, addEntry, removeEntry }}>
      {children}
    </EntriesContext.Provider>
  );
}
