import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CryptoCreators from "@/components/CryptoCreators";
import CryptoDictionary from "@/components/CryptoDictionary";
import ContentSection from "@/components/ContentSection";
import ContentSection2 from "@/components/ContentSection2";
import ContentSection3 from "@/components/ContentSection3";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ContentSection />
      <ContentSection2 />
      <ContentSection3  />
      <CryptoCreators />
      <CryptoDictionary  />
      <Footer />

    </main>
  );
}
