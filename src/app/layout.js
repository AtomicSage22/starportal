import { Outfit } from 'next/font/google'
import NavBar from '@/components/NavBar';
 
// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({ subsets: ['latin'] })


import "./globals.css";
import Hero from '@/components/Hero';


export const metadata = {
  title: "Interact Quests",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
