export const metadata = {
  title: 'App',
  description: 'Next.js migration scaffold',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
