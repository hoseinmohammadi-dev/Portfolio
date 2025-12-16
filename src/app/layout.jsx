import "./globals.css";

export const metadata = {
  title: "Hosein Mohammadi – Frontend Developer",
  description:
    "Portfolio website of Hosein Mohammadi, a passionate Frontend Developer. Explore projects, skills, and contact information.",
  keywords: ["Hosein Mohammadi", "hoseinmdev", "Frontend Developer", "Web Developer", "programmer"],
  authors: [{ name: "Hosein Mohammadi" }],
  openGraph: {
    title: "Hosein Mohammadi – Frontend Developer",
    description:
      "Portfolio website of Hosein Mohammadi, a passionate Frontend Developer. Explore projects, skills, and contact information.",
    url: "https://hoseinmdev.ir",
    siteName: "Hosein Mohammadi Portfolio",
    type: "website",
    images: [
      {
        url: "/image/profile.jpg",
        width: 800,
        height: 800,
        alt: "Hosein Mohammadi",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/profile.jpg" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hosein Mohammadi",
              "jobTitle": "Frontend Developer",
              "url": "https://hoseinmdev.ir",
              "image": "/image/profile.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/hoseinmohammadi-dev/",
                "https://github.com/hoseinmohammadi-dev",
                "https://www.instagram.com/hoseinmdev/"
              ]
            }),
          }}
        />
      </head>
      <body className="bg-(--bg-color) w-full container mx-auto">
        {children}
      </body>
    </html>
  );
}
