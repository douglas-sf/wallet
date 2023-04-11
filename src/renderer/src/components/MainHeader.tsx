import { CurrencyDollar } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

import { AddEntryModal } from './AddEntryModal';

export function MainHeader() {
  return (
    <header className="h-[212px] bg-violet-700">
      <div className="w-[80%] max-w-[1120px] py-8 mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex justify-center items-center">
            <CurrencyDollar size={28} className="text-white" />
          </div>

          <strong className="text-white text-2xl font-bold">Minha carteira</strong>
        </div>

        <Dialog.Root>
          <Dialog.Trigger className="h-12 px-8 bg-violet-600 rounded text-white font-bold transition-colors hover:bg-violet-500 outline-none focus:ring-2 ring-emerald-500 ring-offset-2 ring-offset-violet-700">
            Nova transação
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="absolute inset-0 bg-black/80" />

            <AddEntryModal />
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
