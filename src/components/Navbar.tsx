import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { type To } from "react-router-dom";
import logoSerigrafia from './../../public/Logo-Serigrafia.ico';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";




interface NavItem {
  id: string;
  path: To;
  label: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const navItems: NavItem[] = [
    { id: 'inicio', path: '/', label: 'Inicio'},
    { id: 'tecnicas', path: '/tecnicas', label: 'Técnicas' },
    { id: 'trabajos-realizados', path: '/trabajos-realizados', label: 'Trabajos realizados' },
    { id: 'como-trabajamos', path: '/como-trabajamos', label: 'Cómo Trabajamos' },
    { id: 'contacto', path: '/contacto', label: 'Contacto' }
  ];
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef= useRef<HTMLDivElement>(null);
  const logoRef= useRef<HTMLImageElement>(null);
  const navbarDesktopRef=useRef<HTMLDivElement>(null);
  const navItemsRef=useRef<(HTMLElement|null)[]>([]);
  const navbuttonRef=useRef<HTMLDivElement>(null);
  const navmobilemenuRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const navbar=navbarRef.current;
    const logo=logoRef.current;
    const navbarDesktop=navbarDesktopRef.current;
    const itemsnav=navItemsRef.current;
    const navbutton=navbuttonRef.current;
    const mobilemenu=navmobilemenuRef.current;

    if(!navbar||!logo||!navbarDesktop)return;
    const tl =gsap.timeline({paused:true});
    tl.to(navbar,{height:50,top:0, padding:'0', duration:0.5})
    .to(logo,{
      paused:true,
      scrollTrigger: {
        trigger: "img",
        start: "top top",
        end: "+=50",
        scrub: true,
        onEnter: () => gsap.to(logo, { scale: 0.9,top:0,paddingBottom:'20px',paddingTop:'0px',  duration: 0.5 }),
        onLeaveBack: () => gsap.to(logo, { scale: 1.1,paddingBottom:'0px',paddingTop:'0px', duration: 0.5 })
      }})
    .to(navbarDesktop,{height:50,top:'0',duration:0.5},0)
    .to(itemsnav, {
      paused: true,
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "+=50",
        scrub: true,
        onEnter: () => gsap.to(itemsnav, { scale: 0.9,paddingBottom:'4px',paddingTop:'5px', duration: 0.5 }),
        onLeaveBack: () => gsap.to(itemsnav, { scale: 1.1,paddingBottom:'12px',paddingTop:'12px',  duration: 0.5 })
      }
    })
    .to(navbutton,{paused:true,
      scrollTrigger:{
        trigger:"button",
        start:"top top",
        end:"+=50",
        scrub:true,
        onEnter: () => gsap.to(navbutton, { scale: 0.9,top:0,paddingBottom:'20px',paddingTop:'0px',  duration: 0.5 }),
        onLeaveBack: () => gsap.to(navbutton, { scale: 1.1,paddingBottom:'0px',paddingTop:'0px', duration: 0.5 })
      }})
      .to(mobilemenu,{paused:true,
        scrollTrigger:{
          trigger:".menu_mobile",
          start:"top top",
          end:"+=50",
          scrub:true,
          onEnter: () => gsap.to(mobilemenu, {y:-22,  duration: 0.5 }),
        onLeaveBack: () => gsap.to(mobilemenu, {y:+22, duration: 0.5 })
        }
      });
    const handleScroll = () => {
      if (window.scrollY > 60) {
        tl.play();
        // tl.restart(true);
      } else {
        tl.pause();
        tl.revert(navbar);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  // Función para manejar el estilo activo en desktop
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive 
      ? 'px-4 py-3 rounded-md text-sm 2md:text-md font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
      : 'px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  };

  // Función para manejar el estilo activo en mobile
  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? 'block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
      : 'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  };

  return (
    <nav ref={navbarRef} className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 2md:px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-0 h-18">
          {/* Logo */}
          <div ref={logoRef} className="flex h-8 items-center">
            <img
              src={logoSerigrafia} 
              alt="Logo Serigrafía" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-md md:text-sm 2md:text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Serigrafía Textil
            </span>
          </div>

          {/* Desktop Navigation */}
          <div ref={navbarDesktopRef} className="hidden md:block ">
            <div className="ml-10 md:flex items-baseline space-x-4">
              
            <NavLink to="/" ref={el => {navItemsRef.current[0] = el}}  className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/tecnicas" ref={el => {navItemsRef.current[1] = el}}   className={getNavLinkClass}  onClick={() => setIsMenuOpen(false)}>
              Técnicas
              </NavLink>
            <NavLink to="/trabajos-realizados" ref={el => {navItemsRef.current[2] = el}}   className={getNavLinkClass}  onClick={() => setIsMenuOpen(false)}>
            Trabajos realizados
              </NavLink>
            <NavLink to="/como-trabajamos" ref={el => {navItemsRef.current[3] = el}}   className={getNavLinkClass}  onClick={() => setIsMenuOpen(false)}>
              Como Trabajamos
              </NavLink>
            <NavLink to="/contacto" ref={el => {navItemsRef.current[4] = el}}    className={getNavLinkClass}  onClick={() => setIsMenuOpen(false)}>
              Contacto
              </NavLink>

            </div>
          </div>

          {/* Mobile menu button */}
          <div ref={navbuttonRef} className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      
        <div ref={navmobilemenuRef} className="menu_mobile md:hidden">
            {isMenuOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={getMobileNavLinkClass}
                end={item.path === '/'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
        </div>
      
    </nav>
  );
};

export default Navbar;