import Header from "../components/Menu";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
