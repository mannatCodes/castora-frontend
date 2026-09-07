import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BookOpenText, Compass, Database, Home, Menu, Mic2, Radio, X } from 'lucide-react';

const navItems = [
   { label: 'Home', path: '/', icon: Home },
   { label: 'Articles', path: '/articles', icon: BookOpenText },
   { label: 'Podcasts', path: '/podcasts', icon: Radio },
   { label: 'Studio', path: '/studio', icon: Mic2 },
   { label: 'Voyager', path: '/voyager', icon: Compass },
   { label: 'Sources', path: '/sources', icon: Database },
];

const Navbar = () => {
   const location = useLocation();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const isActive = path => location.pathname === path || location.pathname.startsWith(`${path}/`);
   const brandIcon = `${process.env.PUBLIC_URL}/castora-mark.svg`;

   return (
      <nav className="sticky top-0 z-40 border-b border-amber-500/10 bg-zinc-950/80 shadow-xl shadow-black/20 backdrop-blur-xl">
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
         <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between gap-4">
               <Link to="/" className="group flex min-w-0 items-center gap-3">
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-amber-400/25 bg-gradient-to-br from-amber-500/20 via-stone-900 to-sky-500/20 shadow-lg shadow-amber-950/30">
                     <span className="absolute inset-1 rounded bg-black/20" />
                     <img
                        src={brandIcon}
                        alt="Castora"
                        className="relative h-7 w-7 transition-transform duration-200 group-hover:scale-105"
                     />
                  </span>
                  <span className="min-w-0">
                     <span className="block text-lg font-semibold leading-tight tracking-wide text-stone-50">
                        Castora
                     </span>
                     <span className="block truncate text-xs font-medium uppercase tracking-[0.18em] text-amber-300/70">
                        Curated Audio Intelligence
                     </span>
                  </span>
               </Link>

               <div className="hidden items-center rounded-md border border-white/10 bg-white/[0.03] p-1 shadow-inner shadow-black/30 md:flex">
                  {navItems.map(({ label, path, icon: Icon }) => {
                     const active = isActive(path);
                     return (
                        <Link
                           key={path}
                           to={path}
                           className={`flex items-center gap-2 rounded px-3 py-2 text-sm font-medium transition-all duration-200 ${
                              active
                                 ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-950/30'
                                 : 'text-stone-400 hover:bg-white/[0.06] hover:text-stone-100'
                           }`}
                        >
                           <Icon className="h-4 w-4" />
                           {label}
                        </Link>
                     );
                  })}
               </div>

               <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-stone-200 transition hover:border-amber-400/40 hover:text-amber-300 md:hidden"
                  aria-label="Open navigation"
               >
                  <Menu className="h-5 w-5" />
               </button>
            </div>
         </div>

         <div
            className={`fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
               isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
         >
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
               <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-amber-400/25 bg-gradient-to-br from-amber-500/20 via-stone-900 to-sky-500/20">
                     <img src={brandIcon} alt="Castora" className="h-7 w-7" />
                  </span>
                  <div className="min-w-0">
                     <div className="text-lg font-semibold text-stone-50">Castora</div>
                     <div className="truncate text-xs uppercase tracking-[0.18em] text-amber-300/70">
                        Curated Audio Intelligence
                     </div>
                  </div>
               </div>
               <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-stone-200 transition hover:border-amber-400/40 hover:text-amber-300"
                  aria-label="Close navigation"
               >
                  <X className="h-5 w-5" />
               </button>
            </div>
            <div className="px-4 py-5">
               <div className="grid gap-2">
                  {navItems.map(({ label, path, icon: Icon }) => {
                     const active = isActive(path);
                     return (
                        <Link
                           key={path}
                           to={path}
                           onClick={() => setIsMobileMenuOpen(false)}
                           className={`flex items-center gap-3 rounded-md border px-4 py-3 text-base font-medium transition ${
                              active
                                 ? 'border-amber-400/40 bg-amber-400 text-zinc-950'
                                 : 'border-white/10 bg-white/[0.03] text-stone-200 hover:border-amber-400/30 hover:bg-white/[0.07]'
                           }`}
                        >
                           <Icon className="h-5 w-5" />
                           {label}
                        </Link>
                     );
                  })}
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
