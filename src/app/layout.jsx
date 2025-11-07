import "./globals.css";

export const metadata = {
  title: "Hosein Mohammadi – Frontend Developer",
  description:
    "Portfolio website of Hosein Mohammadi, a passionate Frontend Developer. Explore projects, skills, and contact information.",
  keywords: ["Hosein Mohammadi", "hoseinmdev", "Frontend Developer", "Web Developer" , "حسین محمدی" , "حسین محمدی فرانت اند" ,  "حسین محمدی دولوپر"],
  authors: [{ name: "Hosein Mohammadi" }],
  openGraph: {
    title: "Hosein Mohammadi – Frontend Developer",
    description:
      "Portfolio website of Hosein Mohammadi, a passionate Frontend Developer. Explore projects, skills, and contact information.",
    url: "https://hoseinmdev.ir",
    siteName: "Hosein Mohammadi Portfolio",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-(--bg-color) w-full container mx-auto">
        {children}
      </body>
    </html>
  );
}
