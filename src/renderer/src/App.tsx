import { CreditBox } from './components/CreditBox';
import { DebitBox } from './components/DebitBox';
import { EntriesTable } from './components/EntriesTable';
import { MainHeader } from './components/MainHeader';
import { TotalBox } from './components/TotalBox';
import { EntriesProvider } from './contexts/Entries';

export function App() {
  return (
    <div className="w-screen min-h-screen">
      <EntriesProvider>
        <MainHeader />

        <div className="w-[80%] max-w-[1120px] mx-auto">
          <div className="-translate-y-1/2 flex justify-between items-center">
            <CreditBox />
            <DebitBox />
            <TotalBox />
          </div>

          <main>
            <EntriesTable />
          </main>
        </div>
      </EntriesProvider>
    </div>
  );
}
