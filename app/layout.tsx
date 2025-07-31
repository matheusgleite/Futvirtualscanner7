export const metadata = {
  title: "FutVirtualScanner",
  description: "Scanner de futebol virtual da Bet365 com estatísticas e gráficos.",
};

import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white min-h-screen">{children}</body>
    </html>
  );
}
