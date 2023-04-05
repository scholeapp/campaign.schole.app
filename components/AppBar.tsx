import Link from "next/link";
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import MobileMenu from "./MobileMenu";
import { MyContainer } from "./ui/MyContainer";

export function AppBar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  }
  const navs = [
    { href: "/python-course#service", title: "Service", jpTitle: "Scholeのサービス内容" },
    { href: "/python-course#price", title: "Price", jpTitle: "料金" },
    { href: "/python-course#voice", title: "Voice", jpTitle: "受講者さま・保護者さまの声"},
    { href: "/python-course#contact", title: "Contact", jpTitle: "お問い合わせ"},
  ]
  return (
    <>
      <div className="bg-white/90 py-2 sm:py-4 w-full sticky top-0 shadow z-10 bavkdrop-blur">
        <header>
          <MyContainer>
            <div className="flex justify-between items-center">
              <a href="/python-course">
                <img src="/logo.svg" width="90px"></img>
              </a>
              <button
                className='inline-flex p-1 hover:bg-gray-100 sm:hidden outline-none rounded duration-200 mr-4'
                onClick={handleClick}
              >
                <Bars3Icon className="h-8 w-8 text-gray-500" />
              </button>
              {/* desktop menu */}
              <ul className="text-gray-500 mr-4 tracking-wider sm:inline-flex sm:ml-auto hidden sm:visible">
                {
                  navs.map( nav => (
                    <li key={nav.href} className="ml-4">
                      <Link href={`${nav.href}`}>
                        {nav.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </MyContainer>
        </header>
      </div>
      <MobileMenu navs={navs} active={active} handleClick={handleClick}/>
    </>
  );
};