// import React from "react";
// import logo from "../assets/Small-logo-02.png";

// export default function Dashboard({ onViewMenu }) {
//   return (
//     <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6 bg-beige relative overflow-hidden">
//       {/* Background floating shapes */}
//       <div className="absolute w-48 h-48 bg-gold/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
//       <div className="absolute w-60 h-60 bg-mutedGreen/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-300" />

//       {/* Logo Section */}
//       <div className="animate-fadeInUp flex flex-col items-center">
//         <img
//           src={logo}
//           alt="Restaurant Logo"
//           className="w-40 sm:w-52 md:w-60 object-contain mb-6 drop-shadow-lg animate-float"
//         />
//         <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-darkGreen tracking-wide">
//           Welcome to <span className="text-gold">Craveo</span>
//         </h2>
//         <p className="text-mutedGreen text-base sm:text-lg mb-8 max-w-md">
//           A perfect blend of flavor, comfort, and elegance — explore our menu to
//           discover your next craving.
//         </p>
//       </div>

//       {/* View Menu Button */}
//       <button
//         onClick={onViewMenu}
//         className="bg-gold text-darkGreen px-10 py-3.5 rounded-full font-semibold text-lg 
//         shadow-md hover:shadow-xl transition-all duration-300 ease-out
//         hover:bg-darkGreen hover:text-beige active:scale-95 animate-fadeInUp delay-150"
//       >
//         View Menu 🍽️
//       </button>

//       {/* Decorative divider line */}
//       <div className="absolute bottom-10 w-2/3 h-[2px] bg-gradient-to-r from-gold/40 via-darkGreen/20 to-gold/40 rounded-full" />
//     </div>
//   );
// }

// /* === Extra Animations (Tailwind custom classes) ===
// Add this to your global CSS file (e.g., index.css or tailwind.css) if not already there:
// -----------------------------------------------------------------
// @keyframes float {
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// }
// .animate-float {
//   animation: float 3s ease-in-out infinite;
// }

// @keyframes fadeInUp {
//   0% { opacity: 0; transform: translateY(20px); }
//   100% { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeInUp {
//   animation: fadeInUp 1s ease-out forwards;
// }
// -----------------------------------------------------------------
// */


import React from "react";
import logo from "../assets/Small-logo-02.png";

export default function Dashboard({ onViewMenu }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center px-6 bg-beige relative overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute w-72 h-72 bg-gold/20 rounded-full blur-3xl -top-16 -left-20 animate-pulse" />
      <div className="absolute w-96 h-96 bg-mutedGreen/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-300" />

      {/* Logo Section */}
      <div className="animate-fadeInUp flex flex-col items-center z-10">
        <img
          src={logo}
          alt="Restaurant Logo"
          className="w-60 sm:w-52 md:w-60 object-contain drop-shadow-lg animate-float"
        />
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-darkGreen tracking-wide">
          Welcome to <span className="text-gold">Craveo</span>
        </h2>
        <p className="text-mutedGreen text-base sm:text-lg mb-8 max-w-md">
          A perfect blend of flavor, comfort, and elegance — explore our menu to
          discover your next craving.
        </p>
      </div>

      {/* View Menu Button */}
      <button
        onClick={onViewMenu}
        className="bg-gold text-darkGreen px-10 py-3.5 rounded-full font-semibold text-lg 
        shadow-md hover:shadow-xl transition-all duration-300 ease-out
        hover:bg-darkGreen hover:text-beige active:scale-95 animate-fadeInUp cursor-pointer delay-150 z-10"
      >
        View Menu
      </button>

      {/* Decorative divider line */}
      <div className="absolute bottom-10 w-2/3 h-[2px] bg-gradient-to-r from-gold/40 via-darkGreen/20 to-gold/40 rounded-full" />
    </div>
  );
}

/* === Extra Animations (Tailwind custom classes) ===
Add this to your global CSS file (index.css or tailwind.css):
-----------------------------------------------------------------
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
}
-----------------------------------------------------------------
*/
