export default function MenuCategory({ categories, onSelectCategory }) {
  return (
    <div className="px-6 py-8 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-darkGreen">Select Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="bg-gold text-darkGreen font-semibold rounded-xl py-4 hover:bg-mutedGreen hover:text-beige transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}


