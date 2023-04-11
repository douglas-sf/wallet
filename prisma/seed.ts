import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  const date = dayjs().startOf('day').toDate();

  const entries = [
    {
      description: 'Uber',
      value: 12.93,
      type: 'out',
      date,
    },
    {
      description: 'Ifood',
      value: 32.5,
      type: 'out',
      date,
    },
    {
      description: 'Trabalho extra',
      value: 100,
      type: 'in',
      date,
    },
    {
      description: 'Recebimento',
      value: 30,
      type: 'in',
      date,
    },
  ];

  for (const entry of entries) {
    await prisma.entry.create({
      data: {
        description: entry.description,
        value: entry.value,
        type: entry.type,
        date: entry.date,
      },
    });
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
