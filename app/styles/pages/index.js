import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Simulação de fetch de dados (substituir por scraping/API futuramente)
    setMatches([
      { id: 1, time: '10:00', home: 'Brasil', away: 'Alemanha', score: '2-1' },
      { id: 2, time: '10:15', home: 'Argentina', away: 'França', score: '1-2' },
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>FutVirtualScanner</title>
      </Head>

      <main className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-6">FutVirtualScanner.pro</h1>

        <section>
          <h2 className="text-xl mb-4">Últimos Jogos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-gray-800 p-4 rounded-xl shadow">
                <p className="text-lg font-semibold">{match.home} x {match.away}</p>
                <p>Horário: {match.time}</p>
                <p>Placar: {match.score}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
