import { useEffect, useState } from "react";

export default function Footer({ footerAPI: { titles, links } }) {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <footer className="bg-theme  pt-7 pb-5 ">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {titles.map((title, i) => (
            <div key={i} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                {title.title}
              </h1>
            </div>
          ))}
          {links.map((link, i) => (
            <ul key={i} className="grid items-center gap-1">
              {link.map((links, i) => (
                <li key={i} className="text-sm sm:tex-xs">
                  {links.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1 flex-wrap">
          <p className="text-sm md:text-center">Copyright</p>
          <sup className="text-base font-bold flex mt-4">&copy; All Reserved Rights</sup>
          <span className="font-semibold">Design by Nana Kwame {Year}</span>
        </div>
      </div>
    </footer>
  );
}
