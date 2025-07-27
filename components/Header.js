'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Search, MoreHorizontal, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileRecipes, setShowMobileRecipes] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});


 const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Indian Regional Cuisine",
      href: "",
      submenu: [
        { label: "Uttar Pradesh", href: "/state/Uttar-Pradesh" },
        { label: "Punjabi", href: "/state/punjab" },
        { label: "Rajasthani", href: "/state/Rajasthan" },
        { label: "Sikkim", href: "/state/Sikkim" },
        { label: "Tamil Nadu", href: "/state/Tamil-Nadu" },
        { label: "Tripura", href: "/state/Tripura" },
        { label: "Uttarakhand", href: "/state/Uttaranchal" },
        { label: "West Bengali", href: "/state/West-Bengal" },
        { label: "Kerala", href: "/state/Kerala" },
        { label: "Odisha", href: "/state/Orissa" },
        { label: "Nagaland", href: "/state/Nagaland" },
        { label: "Mizoram", href: "/state/Mizoram" },
        { label: "Meghalaya", href: "/state/Meghalaya" },
        { label: "Manipur", href: "/state/Manipur" },
        { label: "Maharashtra", href: "/state/Maharashtra" },
        { label: "Haryana", href: "/state/Haryana" },
        { label: "Gujarat", href: "/state/Gujarat" },
        { label: "Goa", href: "/state/Goa" },
        { label: "Karnataka", href: "/state/Karnataka" },
        { label: "Assam", href: "/state/Assam" },
        { label: "Arunachal", href: "/state/Arunachal-Pradesh" },
        { label: "Andhra", href: "/state/Andhra-Pradesh" },
        { label: "Bihari", href: "/state/Bihar" },
        { label: "Chhattisgarh", href: "/state/Chhattisgarh" },
        { label: "Jharkhand", href: "/state/Jharkhand" },
        { label: "Madhy Pradesh", href: "/state/Madhya-Pradesh" },
        { label: "Himachal", href: "/state/Himachal-Pradesh" },
        { label: "Kashmiri", href: "/state/Jammu-and-Kashmir" },
      ],

    },

    { 
      label: "Consultency", 
      href: "/",
      submenu: [
        { label: "Nutrition Consultance", href: "/1" },
        { label: "Menu Plaining", href: "/2" },
        { label: "Cost Analysis", href: "/3" },
        { label: "Menu Engineering", href: "/4" },
        { label: "Sop Create", href: "/5" },
        { label: "Creative Food idea", href: "/6" },
        { label: "Low Budget Startup", href: "/7" },
        { label: "Food Persentation", href: "/8" },
        { label: "Online Food Classes", href: "/9" },
        { label: "Who To Control Food Wastage", href: "/10" },
        { label: "Recipes Priciny Analysts", href: "/11" },
      ],
    },
    { 
      label: "Product List",
      href: "/", 
      submenu: [
        { label: "Indian Rustic Food", href: "/product/Indian-Rustic-Food"},
        { label: "Nutrition Consultancy", href: "/product/Nutrition-Consultancy"},
        { label: "Indian Immunity Boasting Recipes", href: "/product/Indian-Immunity-Boasting-Recipes"},
        { label: "Indian Heart Healthy Recipes", href: "/product/Indian-Heart-Healthy-Recipes"},
        { label: "Indian Weight Loss Food Recipes", href: "/product/Indian-Weight-Loss-Food-Recipes"},
        { label: "Indian Gluten Free Dite Food Recipe", href: "/product/Indian-Gluten-Free-Dite-Food-Recipe"},
        { label: "Indian Lactic Free Desserts", href: "/product/Indian-Lactic-Free-Desserts"},
        { label: "Indian Eatable Raw Foods", href: "/product/Indian-Eatable-Raw-Foods"},
        { label: "Indian Healthy Meals", href: "/product/Indian-Healthy-Meals"},
        { label: "Indian Kids Lunch Box Ideas", href: "/product/Indian-Kids-Lunch-Box-Ideas"},
        { label: "Indian Quick & Easy Meal", href: "/product/Indian-Quick-Easy-Meal"},
        { label: "Indian Healthy Salads", href: "/product/Indian-Healthy-Salads"},
        { label: "World's Soups", href: "/product/World's-Soups"},
      ],
    },
    { label: "Contact Us", href: "/contact" },
    {
     label: "Services",
     href: "/",
     submenu: [
      { label: "Food presentation", href: "/m"},
      { label: "Food safety", href: "/n"},
      { label: "Spices and herbs", href: "/o"},
      { label: "Planning and budgeting", href: "/p"},
      { label: "Food packaging", href: "/q"},
      { label: "Clearing plates", href: "/r"},
      { label: "Food service style", href: "/s"},
     ],
    },
  ];
  const moreLinks = [];


   const navItems = [
    {
      label: "Home", href: '/'
    },
    {
      label: "Recipes", 
      href: "/Recipes",
      submenu: [
        {label: "In Season", href: "/In-Season"},
        {label: "Occasions", href: "/Occasions"},
        {label: "Cuisines", href: "/Cuisines"},
        {label: "Ingredients", href: "/Ingredients"},
        {label: "Dishes", href: "/Dishes"},
        {label: "Collections", href: "Collections"},
      ],
    },
    {label: "Budget Recipes", href: "/budget"},
    {label: "Chefs", href: "/Chefs"},
    {label: "Stories", href: "/Stories"},
    {label: "Diets", href: "/Diets"},
    {label: "Programmes", href: "/Programmes"},
    {label: "Techniques", href: "Techniques"},
  ];
  
  return (
    <>
      {/* 📌 Header */}
      <header className={`bg-white flex items-center justify-between px-4 py-3 relative z-50 ${ showMoreMenu ? '' : 'border-b border-gray-300'}`}>

         {/* 📱 Mobile: Search & menu buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-base font-bold" />
            ) : (
              <Menu className="w-6 h-6 text-base font-bold" />
            )}
          </button>
        </div>


        {/* Logo Center */}
        <div className="flex justify-center items-center space-x-1 w-auto lg:w-[20%]">
          {"SAMRIT".split("").map((char, index) => (
            <div
              key={index}
              className="bg-black text-white text-[24px] font-bold w-5 md:w-10 h-10 flex items-center justify-center"
            >
              {char}
            </div>
          ))}
            <h1 className="text-2xl font-bold text-black-800 ml-2">FOOD</h1>
        </div>

        {/* 📱 Mobile: User icon */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
        </div>
       
        {/* 📺 Desktop: Center Nav */}
        <nav className="hidden lg:flex gap-6 w-[65%] items-center justify-center font-bold relative">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              
              {/* Parent menu item */}
              {link.submenu ? (
                <button
                  type="button"
                  className={`cursor-pointer font-bold text-sm hover:underline whitespace-nowrap ${
                    link.submenu.some((sublink) => pathname === sublink.href)
                      ? 'text-blue-600' // active state
                      : ''
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`font-bold text-sm whitespace-nowrap hover:underline ${
                    pathname === link.href ? 'text-blue-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Submenu */}
              {link.submenu && (
                <div className="absolute left-0 top-full min-w-[250px] bg-black/80 shadow-lg rounded-lg z-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto flex flex-wrap transition-all duration-200">
                  {link.submenu.map((sublink, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sublink.href}
                      className={`block px-4 py-2 text-sm font-medium hover:bg-blue-500 text-white ${
                        pathname === sublink.href ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 3-dot menu toggle */}
          <button onClick={() => setShowMoreMenu(!showMoreMenu)}>
            <MoreHorizontal className="w-5 h-5 cursor-pointer" />
          </button>
        </nav>

         {/* 📺 Desktop: right Sign In */}
        <div className="hidden lg:flex items-center gap-2 w-[8%]">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
          <Link href="#" className="text-sm font-bold hover:underline">Sign In</Link>
        </div>


      </header>

      {/* 📺 Desktop: Full-width bar expand on 3-dot */}
      <div
        className={`hidden lg:flex items-center justify-between px-6 border-b border-gray-300 md:border-none overflow-hidden transition-all duration-300 ${
          showMoreMenu ? 'max-h-20 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        } bg-white z-40`}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        <div className="flex gap-8">
          {moreLinks.map((link, idx) => (
            <Link key={link.href} href="#" className="text-base font-medium hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        {/* X icon to close */}
        <button onClick={() => setShowMoreMenu(false)}>
          <X className="w-5 h-5 text-gray-700 cursor-pointer" />
        </button>
      </div> 

      {/* 📱 Mobile: Dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-300 md:border-none px-4 py-3 space-y-2">
          {navLinks.concat(moreLinks).map((link, idx) => (
            <div key={idx}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenus((prev) => ({
                        ...prev,
                        [idx]: !prev[idx],
                      }))
                    }
                    className="w-full flex justify-between items-center text-left text-base font-bold hover:underline"
                  >
                    {link.label}
                    <span>{openMobileSubmenus[idx] ? '▲' : '▼'}</span>
                  </button>

                  {openMobileSubmenus[idx] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.submenu.map((sublink, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sublink.href}
                          className="block text-sm font-medium text-gray-700 hover:underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block text-base font-medium hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
     
     {/* Desktop Navigation */}
      <div className="hidden md:flex items-center bg-black text-white text-sm font-medium">
        <nav className="flex-1">
          <ul className="flex">
            {navItems.map((item, i) => (
              const isActive =
          pathname === item.href ||
          item.submenu?.some((sublink) => pathname === sublink.href);
              <li
                key={i}
                className={`py-2 relative group last:border-none ${
                  isActive ? 'bg-white text-black' : ''
                }`}
              >
                {item.submenu ? (
                  <span className="px-4 border-r border-gray-400 block hover:bg-blue cursor-pointer">
                    {item.label} <span className="ml-1">▼</span>
                  </span>
                ) : (
                  <Link href={item.href} className="px-4 border-r border-gray-400 block hover:bg-blue">
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-[-5rem] top-full bg-black/80 text-white w-screen shadow-lg z-50 hidden group-hover:block">
                    <div className="flex gap-4 px-5 py-2 text-sm flex-wrap">
                      {item.submenu.map((sub, idx) => (
                        <Link key={idx} href={sub.href}>
                          <span className="hover:underline whitespace-nowrap pr-2 border-r border-gray-300 last:border-none">
                            {sub.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

            ))}
          </ul>
        </nav>
        <Link href="/favourites">
          <span className="px-4 text-green-300 hover:bg-blue block">
            Your Favourites
          </span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-3 px-4 ml-auto md:hidden">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShowMobileRecipes(null); // close all dropdowns
          }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#017d18] text-white text-sm font-medium">
          <ul>
            {navItems.map((item, i) => (
              <li key={i} className="border-b border-white-300 text-[15px]">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setShowMobileRecipes(showMobileRecipes === i ? null : i)
                      }
                      className="w-full text-left px-4 py-2 hover:bg-blue flex justify-between items-center"
                    >
                      {item.label}
                      <span>{showMobileRecipes === i ? "▲" : "▼"}</span>
                    </button>
                    {showMobileRecipes === i && (
                      <ul className="bg-[#339646] text-white border-t">
                        {item.submenu.map((sub, idx) => (
                          <li key={idx}>
                            <Link href={sub.href}>
                              <span className="block px-6 py-2 text-sm border-b hover:bg-blue">
                                {sub.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <span className="block px-4 py-2 hover:bg-blue">
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            <li className="text-[15px]">
              <Link href="/favourites">
                <span className="block px-4 py-3 text-green-300 hover:bg-blue">
                  Your Favourites
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}

    </>
  );
}
