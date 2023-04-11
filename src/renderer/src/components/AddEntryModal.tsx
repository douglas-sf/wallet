import { ArrowCircleDown, ArrowCircleUp, Check, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useEntries } from '@renderer/hooks/useEntries';
import { FormEvent } from 'react';

export function AddEntryModal() {
  const { addEntry } = useEntries();

  async function submitHandler(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const data = Object.fromEntries(formData) as any;

    await addEntry(data);
  }

  return (
    <Dialog.Content className="w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 m-auto rounded-xl">
      <Dialog.Close className="absolute top-3 right-3 outline-none focus:ring-2 ring-offset-2 ring-violet-500">
        <X size={24} weight="bold" />
      </Dialog.Close>

      <h2 className="text-3xl font-bold mb-8 text-violet-500">Cadastrar nova transação</h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="date">Data:</label>
          <input
            autoFocus
            id="date"
            type="date"
            name="date"
            className="h-12 px-3 border border-zinc-300 rounded-lg flex items-center outline-none focus:ring-2 ring-offset-2 ring-violet-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Descrição:</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Digite uma descrição"
            className="h-12 px-3 border border-zinc-300 rounded-lg flex items-center outline-none focus:ring-2 ring-offset-2 ring-violet-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="value">Valor:</label>
          <input
            id="value"
            type="number"
            name="value"
            placeholder="Digite uma descrição"
            step={0.01}
            min={0.01}
            className="h-12 px-3 border border-zinc-300 rounded-lg flex items-center outline-none focus:ring-2 ring-offset-2 ring-violet-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Tipo:</label>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="radio"
                name="type"
                id="type-in"
                value="in"
                className="w-0 h-0 peer outline-none absolute top-1/2 left-1/2"
                defaultChecked
              />
              <label
                htmlFor="type-in"
                className="h-12 flex justify-center items-center gap-3 rounded border border-emerald-500 peer-focus:ring-2 ring-offset-2 ring-violet-500 peer-checked:bg-emerald-200"
              >
                <ArrowCircleUp size={26} weight="bold" className="text-emerald-600" />
                Entrada
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="type"
                id="type-out"
                value="out"
                className="w-0 h-0 peer outline-none absolute top-1/2 left-1/2"
              />
              <label
                htmlFor="type-out"
                className="h-12 flex justify-center items-center gap-3 rounded border border-red-500 peer-focus:ring-2 ring-offset-2 ring-violet-500 peer-checked:bg-red-200"
              >
                <ArrowCircleDown size={26} weight="bold" className="text-red-600" />
                Saída
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end items-center gap-8">
          <Dialog.Close className="py-2 px-4 flex justify-center items-center gap-2 bg-red-600 rounded text-white font-bold transition-colors hover:bg-red-700 outline-none focus:ring-2 ring-offset-2 ring-violet-500">
            <X size={18} weight="bold" />
            Cancelar
          </Dialog.Close>

          <button
            type="submit"
            className="py-2 px-4 flex justify-center items-center gap-2 bg-green-600 rounded text-white font-bold transition-colors hover:bg-green-700 outline-none focus:ring-2 ring-offset-2 ring-violet-500"
          >
            <Check size={18} weight="bold" />
            Cadastrar
          </button>
        </div>
      </form>
    </Dialog.Content>
  );
}
