import { ArrowCircleDown } from '@phosphor-icons/react';

import { ValueBox } from './ValueBox';

import { useEntries } from '../hooks/useEntries';

export function DebitBox() {
  const { debits } = useEntries();

  const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ValueBox>
      <ArrowCircleDown size={32} className="text-red-500 absolute top-5 right-5" />

      <h2>Saídas</h2>

      <strong className="text-4xl">{formatter.format(debits)}</strong>
    </ValueBox>
  );
}
