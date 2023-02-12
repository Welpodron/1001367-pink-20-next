import { LINKS } from "@/pages/data/data";
import LogoIcon from "public/icons/logo-pink-white-mobile.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="p-5 container">
        <div>
          <Link
            className="inline-grid place-content-center overflow-hidden w-[74px] h-[23px]"
            href="/"
          >
            <LogoIcon />
          </Link>
          <button type="button"></button>
        </div>
        <nav className="font-bold uppercase">
          <ul>
            {LINKS.map(({ name, url }) => (
              <li key={name}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
