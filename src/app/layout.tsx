import DefaultHeader from "@/components/DefaultHeader";
import "./globals.css";

export const metadata = {
  title: "Lokafly - Your true store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DefaultHeader />

        {children}
      </body>
    </html>
  );
}
