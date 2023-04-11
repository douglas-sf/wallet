import { ArrowCircleDown, ArrowCircleUp, Trash } from '@phosphor-icons/react';
import dayjs from 'dayjs';

import { useEntries } from '../hooks/useEntries';

const headers = ['Data', 'Descrição', 'Valor', 'Tipo', 'Opções'];

export function EntriesTable() {
  const { entries, removeEntry } = useEntries();

  const moneyFormatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="w-full max-h-[calc(100vh-350px)] -mt-8 flex flex-col gap-2 relative overflow-y-auto">
      <div className="w-full py-4 px-5 sticky top-0 bg-zinc-100 grid grid-cols-[2fr,4fr,2fr,1fr,1fr] text-gray-500 items-center justify-items-start">
        {headers.map((header, index) => {
          return <div key={index}>{header}</div>;
        })}
      </div>

      {entries.map((entry) => {
        async function removeEntryHandle() {
          const test = confirm(`Tem certeza que deseja remover essa entrada?\n${entry.description}`);

          if (test) await removeEntry(entry.id);
        }

        return (
          <div
            key={entry.id}
            className="bg-white rounded-lg text-xl grid grid-cols-[2fr,4fr,2fr,1fr,1fr] py-4 px-5 items-center"
          >
            <div>{dayjs(entry.date).format('DD/MM/YYYY')}</div>
            <div>{entry.description}</div>
            <div>{moneyFormatter.format(entry.value)}</div>
            <div>
              {entry.type === 'in' ? (
                <ArrowCircleUp size={26} weight="bold" className="text-emerald-500" />
              ) : (
                <ArrowCircleDown size={26} weight="bold" className="text-red-500" />
              )}
            </div>
            <div className="flex items-center justify-between">
              <button type="button" onClick={removeEntryHandle}>
                <Trash size={26} weight="bold" className="text-red-500" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
