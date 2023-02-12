import { Header } from "@/pages/components/global/header/Header";
import { Footer } from "@/pages/components/global/footer/Footer";
import { Promo } from "@/pages/scenes/index/promo/Promo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Promo />
      </main>
      <Footer />
    </>
  );
}
