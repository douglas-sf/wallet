import { ArrowCircleUp } from '@phosphor-icons/react';

import { ValueBox } from './ValueBox';

import { useEntries } from '../hooks/useEntries';

export function CreditBox() {
  const { credits } = useEntries();

  const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ValueBox>
      <ArrowCircleUp size={32} className="text-emerald-500 absolute top-5 right-5" />

      <h2>Entradas</h2>

      <strong className="text-4xl">{formatter.format(credits)}</strong>
    </ValueBox>
  );
}
