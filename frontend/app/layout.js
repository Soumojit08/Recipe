import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RecipeHub - AI Recipe Platform",
  description: "Find the right meal for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} `}>
        <main className="min-h-screen">{children}</main>
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <p className="text-stone-500 text-sm">Made with ❤️ by Soumojit</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
