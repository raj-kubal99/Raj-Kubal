import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Raj Kubal",
  description: "Hello, I'm Raj Kubal and this is my portfolio website showcasing my projects, interests and experience in frontend, backend and fullstack web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
