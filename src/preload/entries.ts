import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

interface RawEntry {
  date: string;
  description: string;
  value: string;
  type: 'in' | 'out';
}

const prisma = new PrismaClient({
  log: ['query'],
});

export const entries = {
  getDebits: async () => {
    const { _sum } = await prisma.entry.aggregate({
      _sum: { value: true },
      where: { type: { equals: 'out' } },
    });

    return _sum.value ?? 0;
  },

  getCredits: async () => {
    const { _sum } = await prisma.entry.aggregate({
      _sum: { value: true },
      where: { type: { equals: 'in' } },
    });

    return _sum.value ?? 0;
  },

  getTotal: async () => {
    const result = await prisma.entry.groupBy({
      by: ['type'],
      _sum: { value: true },
    });

    const credits = result.find((item) => item.type === 'in');
    const debits = result.find((item) => item.type === 'out');

    return (credits?._sum.value ?? 0) - (debits?._sum.value ?? 0);
  },

  getEntries: async () => {
    const entries = await prisma.entry.findMany({ orderBy: { date: 'desc' } });

    return entries;
  },

  createEntry: async ({ date, description, value, type }: RawEntry) => {
    const entry = await prisma.entry.create({
      data: {
        date: dayjs(date).startOf('day').toDate(),
        description,
        value: Number(value),
        type,
      },
    });

    return entry;
  },

  removeEntry: async (entryId: string) => {
    await prisma.entry.delete({ where: { id: entryId } });
  },
};
