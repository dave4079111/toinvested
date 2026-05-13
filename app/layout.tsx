import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YPNUS — AI Real Estate Website Generator",
  description:
    "Generate a complete real estate website in 60 seconds. Built for agents, brokers, and investors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
