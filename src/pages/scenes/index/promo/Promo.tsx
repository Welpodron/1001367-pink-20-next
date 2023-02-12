import { MARKETS_TYPE, MARKETS } from "@/pages/data/data";
import Link from "next/link";
import { Image } from "@/pages/components/general/image/Image";

export const Promo = () => {
  return (
    <section>
      <div className="container">
        <h1>Взгляните на жизнь иначе!</h1>
        <Image
          src="/images/iphone-hand-mobile@1x.png"
          mobileSrcSet={[
            "/images/iphone-hand-mobile@1x.png 1x",
            "/images/iphone-hand-mobile@2x.png 2x",
          ]}
          mobileWebpSrcSet={[
            "/images/iphone-hand-mobile@1x.webp 1x",
            "/images/iphone-hand-mobile@2x.webp 2x",
          ]}
          mobileAvifSrcSet={[
            "/images/iphone-hand-mobile@1x.avif 1x",
            "/images/iphone-hand-mobile@2x.avif 2x",
          ]}
          alt="Изображение телефона"
        />
        <Link href="/">Скачать приложение</Link>
        <ul>
          {MARKETS.map(({ name, url, icon: Icon }: MARKETS_TYPE) => (
            <li key={name}>
              <Link href={url}>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
        </p>
      </div>
    </section>
  );
};
