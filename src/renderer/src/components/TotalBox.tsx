import { Cardholder } from '@phosphor-icons/react';

import { ValueBox } from './ValueBox';

import { useEntries } from '../hooks/useEntries';

export function TotalBox() {
  const { total } = useEntries();

  const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ValueBox isTotal>
      <Cardholder size={32} className="text-white absolute top-5 right-5" />

      <h2 className="text-white">Total</h2>

      <strong className="text-4xl text-white">{formatter.format(total)}</strong>
    </ValueBox>
  );
}
