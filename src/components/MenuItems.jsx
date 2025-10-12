export default function MenuItems({ items, title }) {
  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-semibold text-darkGreen text-center mb-6">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="bg-beige p-4 rounded-xl shadow-md border border-gold">
            <h3 className="text-lg font-bold text-darkGreen">{item.name}</h3>
            {item.recipe && <p className="text-sm text-mutedGreen mt-1">{item.recipe}</p>}
            <p className="text-gold mt-2 font-semibold">
              {typeof item.price === "object"
                ? Object.entries(item.price)
                    .map(([k, v]) => `${k}: ₹${v}`)
                    .join(" | ")
                : `₹${item.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
