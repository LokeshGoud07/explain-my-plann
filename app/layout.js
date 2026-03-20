import "./globals.css";

export const metadata = {
  title: "Explain My Plan",
  description: "AI powered idea clarity tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-gray-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}