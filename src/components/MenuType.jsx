export default function MenuType({ onSelectType }) {
  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-2xl font-semibold mb-6 text-darkGreen">Choose Menu</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => onSelectType("food")}
          className="bg-gold text-darkGreen px-8 py-4 rounded-xl font-semibold hover:bg-mutedGreen hover:text-beige transition"
        >
          Food Menu
        </button>
        <button
          onClick={() => onSelectType("bar")}
          className="bg-gold text-darkGreen px-8 py-4 rounded-xl font-semibold hover:bg-mutedGreen hover:text-beige transition"
        >
          Bar Menu
        </button>
      </div>
    </div>
  );
}



