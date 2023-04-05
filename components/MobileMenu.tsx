import Link from "next/link";

interface Nav {
  href: string;
  title: string;
  jpTitle: string;
}
interface MobileMenuProps {
  navs: Nav[];
  active: boolean;
  handleClick: VoidFunction;
}

export default function MobileMenu({navs, active, handleClick}:MobileMenuProps) {
  return (
    <div className="sticky z-10 top-[57px]">
      <div className={`${active ? '' : 'hidden'} relative`}>
        <div className="absolute bg-gray-900 min-h-screen w-screen opacity-60" onClick={handleClick}>
        </div>
        <div className="bg-white absolute z-50 top-0 right-0 shadow opacity-100 w-72 rounded-b-sm">
          <ul className="font-light px-8 py-6 text-gray-500 ">
            {
              navs.map(nav => (
                <li key={nav.href} className="my-5">
                  <Link href={`${nav.href}`}>
                    <span className="text-xl mr-3">{nav.title}</span>
                    <span className="text-xs">{nav.jpTitle}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};