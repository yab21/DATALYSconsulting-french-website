"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import menuData from "./menuData"

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(-1)
  const [langDropdown, setLangDropdown] = useState(false)

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? -1 : index)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
  })

  const usePathName = usePathname()

  // Fonction pour vérifier si nous sommes sur une page d'expertise
  const isExpertisePage = () => {
    return usePathName.includes("/notreexpertise/")
  }

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (path) => {
    if (path === "/") {
      return usePathName === path
    }
    return usePathName.startsWith(path)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent font-sans">
      <div className="flex items-center justify-between px-8 py-6">
        <Link href="/" className="block">
          <img
            src="/images/logo/logo.png"
            alt="logo"
            className="inline-block h-16 w-auto align-middle"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {menuData.map((menuItem, index) =>
            menuItem.submenu ? (
              <div
                key={index}
                className="group relative"
                tabIndex={0}
                onBlur={() => setOpenDropdown(-1)}
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(-1)}
              >
                <button
                  className="flex items-center gap-1 text-lg font-light tracking-wide text-white underline-offset-8 transition-all duration-200 hover:underline focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                  onClick={() => handleDropdown(index)}
                >
                  {menuItem.title}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-lg bg-white py-2 shadow-lg transition-all duration-200 ${openDropdown === index ? "block" : "hidden"}`}
                  role="menu"
                  aria-label={menuItem.title}
                >
                  {menuItem.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.path}
                      className="block px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-150 hover:bg-[#f5c034] hover:text-white"
                      role="menuitem"
                      tabIndex={0}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={menuItem.path || "#"}
                className="text-lg font-light tracking-wide text-white underline-offset-8 transition-all duration-200 hover:underline"
              >
                {menuItem.title}
              </Link>
            ),
          )}
          {/* Dropdown langue */}
          <div
            className="relative ml-4"
            tabIndex={0}
            onBlur={() => setLangDropdown(false)}
          >
            <button
              className="flex items-center gap-2 text-lg font-light text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded={langDropdown}
              onClick={() => setLangDropdown(!langDropdown)}
              onMouseEnter={() => setLangDropdown(true)}
              onMouseLeave={() => setLangDropdown(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#ed2939"
                  d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                />
                <path
                  fill="#002495"
                  d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                />
                <path fill="#eee" d="M12 5h12v26H12z" />
              </svg>
              <span>FR</span>
              <svg
                className={`h-4 w-4 text-white transition-transform duration-200 ${langDropdown ? "rotate-180" : ""}`}
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              className={`absolute right-0 top-full z-50 mt-2 w-32 rounded-lg bg-white py-2 shadow-lg transition-all duration-200 ${langDropdown ? "block" : "hidden"}`}
              role="menu"
              aria-label="Langue"
              onMouseEnter={() => setLangDropdown(true)}
              onMouseLeave={() => setLangDropdown(false)}
            >
              <Link
                href="https://en.datalysconsulting.com/"
                className="block px-5 py-2 text-base font-normal text-gray-800 transition-colors duration-150 hover:bg-[#f5c034] hover:text-white"
                role="menuitem"
                tabIndex={0}
              >
                EN
              </Link>
            </div>
          </div>
        </nav>
        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center text-white focus:outline-none md:hidden"
          aria-label="Open menu"
        >
          <span className="mb-1 block h-0.5 w-8 rounded bg-white"></span>
          <span className="mb-1 block h-0.5 w-8 rounded bg-white"></span>
          <span className="block h-0.5 w-8 rounded bg-white"></span>
        </button>
        {/* Mobile menu */}
        {navbarOpen && (
          <nav className="absolute right-0 top-full mt-2 flex w-56 flex-col items-end rounded-lg bg-black bg-opacity-90 p-6 shadow-lg md:hidden">
            {menuData.map((menuItem, index) =>
              menuItem.submenu ? (
                <div key={index} className="w-full">
                  <button
                    className="flex w-full items-center gap-1 py-2 text-left text-lg font-light tracking-wide text-white focus:outline-none"
                    onClick={() => handleDropdown(index)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                  >
                    {menuItem.title}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openDropdown === index && (
                    <div className="ml-4 border-l border-white/20 pl-4">
                      {menuItem.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className="block px-2 py-2 text-base font-normal text-white transition-colors duration-150 hover:bg-[#f5c034] hover:text-white"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setNavbarOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={menuItem.path || "#"}
                  className="py-2 text-lg font-light tracking-wide text-white underline-offset-8 transition-all duration-200 hover:underline"
                  onClick={() => setNavbarOpen(false)}
                >
                  {menuItem.title}
                </Link>
              ),
            )}
            {/* Dropdown langue mobile */}
            <div className="mt-2 w-full">
              <button
                className="flex w-full items-center gap-1 py-2 text-left text-lg font-light tracking-wide text-white focus:outline-none"
                onClick={() => setLangDropdown(!langDropdown)}
                aria-haspopup="true"
                aria-expanded={langDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="#ed2939"
                    d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                  />
                  <path
                    fill="#002495"
                    d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                  />
                  <path fill="#eee" d="M12 5h12v26H12z" />
                </svg>
                <span>FR</span>
                <svg
                  className={`h-4 w-4 text-white transition-transform duration-200 ${langDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {langDropdown && (
                <div className="ml-4 border-l border-white/20 pl-4">
                  <Link
                    href="https://en.datalysconsulting.com/"
                    className="block px-2 py-2 text-base font-normal text-white transition-colors duration-150 hover:bg-[#f5c034] hover:text-white"
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => setNavbarOpen(false)}
                  >
                    EN
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
