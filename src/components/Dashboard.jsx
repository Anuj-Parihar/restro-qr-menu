import logo from "../assets/Small-logo-02.png";
export default function Dashboard({ onViewMenu }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
      <img
        src={logo}
        alt="Restaurant Logo"
        className="w-100 h-100 object-contain mb-6"
      />
      <h2 className="text-3xl font-semibold mb-4 text-darkGreen">
        Welcome to Craveo
      </h2>
      <button
        onClick={onViewMenu}
        className="bg-gold text-darkGreen px-8 py-3 rounded-full font-semibold text-lg hover:bg-mutedGreen hover:text-beige transition"
      >
        View Menu
      </button>
    </div>
  );
}
