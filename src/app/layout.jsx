import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-(--bg-color) w-full container mx-auto">
        {children}
      </body>
    </html>
  );
}
