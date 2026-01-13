import "./globals.css";

export const metadata = {
  title: "PawZio",
  description: "Trusted pet care wellbeing & live monitoring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
