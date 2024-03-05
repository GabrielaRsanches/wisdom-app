import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from './providers';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><Providers>WISDOM</Providers></head>
      <body className={`${inter.className} antialiased`}><Providers>{children}</Providers></body>
    </html>
  );
}