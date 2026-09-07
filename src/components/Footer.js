import React from 'react';

const Footer = () => {
   const currentYear = new Date().getFullYear();
   const brandIcon = `${process.env.PUBLIC_URL}/castora-mark.svg`;

   return (
      <footer className="bg-zinc-950 border-t border-amber-500/10 pt-8 pb-6 relative overflow-hidden">
         <div
            className="absolute inset-0 opacity-5"
            style={{
               backgroundImage:
                  'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 10px)',
               zIndex: 0,
            }}
         ></div>
         <div
            className="absolute bottom-0 left-0 w-full h-40 opacity-5"
            style={{
               backgroundImage: 'radial-gradient(circle at 15% 85%, #F59E0B 0, transparent 60%)',
            }}
         ></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="col-span-3">
                  <div className="flex items-center mb-0">
                     <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-md border border-amber-400/25 bg-gradient-to-br from-amber-500/20 via-stone-900 to-sky-500/20 shadow-lg shadow-amber-950/30">
                        <img src={brandIcon} alt="Castora" className="h-7 w-7" />
                     </span>
                     <span className="text-xl font-bold text-gray-100">
                        Castora
                     </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-0">
                     Junk-free source curation and podcast generation.
                  </p>
               </div>
            </div>
            <div className="pt-0 mt-0  text-center sm:flex sm:justify-between sm:text-left">
               <p className="text-gray-400 text-sm">&copy; {currentYear} Castora.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
