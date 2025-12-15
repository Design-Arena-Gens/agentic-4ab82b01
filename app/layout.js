import "./globals.css";

export const metadata = {
  title: "Liquid Transitions Gallery",
  description:
    "A curated collection of liquid-inspired transition effects for modern web interfaces."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
