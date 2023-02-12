import { SOCIALS, SOCIALS_TYPE } from "@/pages/data/data";
import Link from "next/link";
import LogoIcon from "public/icons/logo-pink-blue-mobile.svg";

export const Footer = () => {
  const {
    name: academyName,
    url: academyUrl,
    icon: AcademyIcon,
  } = SOCIALS.find(({ name }) => name === "HTMLAcademy") as SOCIALS_TYPE;

  return (
    <footer>
      <div className="p-5 container grid grid-cols-1 gap-10 items-center justify-items-center">
        <Link
          className="inline-grid place-content-center overflow-hidden w-[145px] h-[40px]"
          href="/"
        >
          <LogoIcon />
        </Link>
        <ul className="flex flex-wrap items-center">
          {SOCIALS.filter(({ name }) => name !== academyName).map(
            ({ name, url, icon: Icon }: SOCIALS_TYPE) => (
              <li key={name}>
                <Link
                  className="inline-grid text-pink-1 border-2 border-gray-light-1 p-2 w-[48px] h-[48px] rounded-full m-1 place-content-center overflow-hidden"
                  href={url}
                >
                  <Icon fill="currentColor" />
                </Link>
              </li>
            )
          )}
        </ul>
        <p className="inline-flex items-center truncate">
          <span className="pr-2 mr-2">Разработано</span>
          <Link
            className="inline-grid place-content-center overflow-hidden w-[27px] h-[34px] shrink-0"
            href={academyUrl}
          >
            <AcademyIcon fill="#d22856" />
          </Link>
        </p>
      </div>
    </footer>
  );
};
