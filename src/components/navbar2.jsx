
import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import logo from "../resources/Arjun.svg";
import "../index.css";
const navigation = [
  { name: "Home", to: "home", current: false },
  { name: "About", to: "about", current: false },
  { name: "Projects", to: "projects", current: false },
  { name: "Contact", to: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2() {
  return (
    <Disclosure as="nav" className="  bg-[#0a192f]  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[95vw] px-2 sm:px-6  overflow-hidden relative top-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center  rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  lg:justify-between sm:items-stretch sm:justify-center navText ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden sm:w-[5rem] lg:block "
                    src={logo}
                    alt="logo image"
                  />
                </div>
                <div className="hidden sm:flex items-center ">
                  <div className="flex space-x-4 mt-2">
                    {navigation.map((item) => (
                      <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={1000}
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? " text-[#64ffda]"
                            : "text-[#ccd6f6] hover:text-[#64ffda] transition delay-175 duration-300 ease-in ",
                          "px-5 rounded-md text-[1.3rem] mt-3 hover:cursor-pointer "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="m-3 mt-1 hidden lg:flex relative left-4 items-center justify-center top-3 ">
                  <a
                    href="https://drive.google.com/file/d/1XeIQGCEHQ1dU6UtXk47vyJ2aeJsp-Ar2/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="border border-[#64ffda] rounded-md text-[#64ffda] h-[2.5rem] w-[5rem] hover:bg-[rgba(100,255,218,0.1)] transition delay-175 duration-300 ease-in ">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden relative top-10">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={1000}
                  key={item.name}
                  as="Link"
                  to={item.to}
                  className={classNames(
                    item.current
                      ? " text-[#ccd6f6] navText"
                      : "text-[#ccd6f6] hover:text-[#64ffda] transition delay-175 duration-300 ease-in navText",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
