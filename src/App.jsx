import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

// --- Import Category Icons ---
import StartersImg from "./assets/Starters.png";
import MainsImg from "./assets/Mains.png";
import BeverageImg from "./assets/Beverage.png";
import BarImg from "./assets/Bar.png";

// --- MOCK DATA (You already have the real one) ---
// const menuData = {...};
const menuData = {
  "menu": {
    "Salads": [
      {
        "name": "Greek smoked salad",
        "recipe": "Cherry tomatoes, cucumber, onion, feta cheese, arugula, salt & pepper",
        "price": 299,
        "type": "veg"
      },
      {
        "name": "Caesar salad",
        "recipe": "Romaine lettuce, croutons, parmesan cheese, lemon, olive oil, salt & pepper",
        "price": 299,
        "type": "veg"
      },
      {
        "name": "Green salad",
        "price": 199,
        "type": "veg"
      }
    ],

    "Soups": [
      { "name": "Sundried tomato", "price": 299, "type": "veg" },
      { "name": "Hot and sour", "type": "veg", "price": 299 },
      { "name": "Manchow", "type": "veg", "price": 299 },
      { "name": "Sweet corn", "type": "veg", "price": 299 }
    ],

    "Indian Veg Starters": [
      {
        "name": "Paneer tikka achari",
        "recipe": "A juicy, tangy paneer marinated in pickled spices and grilled to perfection",
        "price": 399
      },
      {
        "name": "Malai paneer tikka",
        "recipe": "Paneer marinated in cream, cheese & mild spices, grilled",
        "price": 399
      },
      { "name": "Classic paneer tikka", "price": 399 },
      {
        "name": "Tandoori mushroom",
        "recipe": "Juicy mushrooms marinated in spiced yogurt, grilled in tandoor",
        "price": 449
      },
      {
        "name": "Malai broccoli",
        "recipe": "Broccoli florets marinated in creamy cheese & cashew, grilled",
        "price": 449
      },
      {
        "name": "Dahi ke kabab",
        "recipe": "Hung curd, spices & herbs pan fried for a creamy kabab",
        "price": 349
      },
      { "name": "Peanut masala", "price": 199 },
      { "name": "Masala papad", "price": 199 },
      { "name": "Plain papad", "price": 99 }
    ],

    "Indian Nonveg Starters": [
      {
        "name": "Tandoori chicken",
        "recipe": "Chicken marinated in spiced yogurt & roasted in tandoor",
        "price": 599
      },
      {
        "name": "Chicken tikka",
        "recipe": "Juicy chicken grilled to smoky perfection",
        "price": 499
      },
      {
        "name": "Murg malai tikka",
        "recipe": "Chicken chunks marinated in creamy malai, grilled",
        "price": 499
      },
      {
        "name": "Murg Barra",
        "recipe": "Tandoori chicken simmered in rich, smoky spices",
        "price": 499
      },
      {
        "name": "Mutton seekh kabab",
        "recipe": "Minced mutton skewers spiced & grilled",
        "price": 599
      },
      { "name": "Fish tikka", "price": 699 }
    ],

    "Platters": [
      {
        "name": "Veg platter",
        "recipe": "Tandoori mushroom (4pcs), Paneer tikka (4pcs), Malai broccoli (4pcs), Dahi ke kabab (4pcs)",
        "price": 799,
        "type": "veg"
      },
      {
        "name": "Non veg platter",
        "recipe": "Tandoori chicken (3pcs), Chicken tikka (3pcs), Murg malai tikka (3pcs), Mutton seekh (3pcs), Fish tikka (3pcs)",
        "price": 999,
        "type": "nonveg"
      },
      { "name": "Hummus celebration", "price": 599, "type": "veg" },
      { "name": "Chakana platter", "price": 499 }
    ],

    "Chinese Veg Starters": [
      { "name": "Crispy corn", "price": 399 },
      { "name": "Honey chilli potato", "price": 399 },
      {
        "name": "King pao paneer",
        "recipe": "Paneer stir-fried with peppers and peanuts in kung pao sauce",
        "price": 449
      },
      { "name": "Chilli paneer", "price": 399 },
      { "name": "Veg spring roll", "price": 399 }
    ],

    "Chinese Nonveg Starters": [
      { "name": "Crispy chilli chicken", "price": 499 },
      {
        "name": "King pao chicken",
        "recipe": "Chicken stir-fry with peppers and peanuts in kung pao sauce",
        "price": 549
      },
      {
        "name": "Chicken 65",
        "recipe": "Spicy fried chicken tossed with curry leaves and chillies",
        "price": 549
      },
      { "name": "Chicken lollipop", "price": 549 },
      { "name": "Chicken spring roll", "price": 449 }
    ],

    "Momos (Steamed)": [
      { "name": "Veg momo", "price": 399, "type": "veg" },
      { "name": "Chicken momo", "price": 499, "type": "nonveg" }
    ],

    "Continental Veg Starters": [
      { "name": "Classic fries", "price": 199 },
      { "name": "Peri peri fries", "price": 249 },
      { "name": "Truffle fries", "price": 299 },
      { "name": "Cheese loaded fries", "price": 299 },
      { "name": "Cheese loaded nachos", "price": 399 },
      { "name": "Cheese chilli arancini", "price": 399 },
      { "name": "Chinese chilli toasty", "price": 299 },
      { "name": "Garlic bread / Cheese garlic bread", "price": 299 }
    ],

    "Continental Nonveg Starters": [
      { "name": "Classic fish & chips", "price": 699 },
      { "name": "Classic fish fingers", "price": 699 },
      { "name": "Chicken popcorn", "price": 399 },
      { "name": "Grilled fish with lemon butter sauce", "price": 699 }
    ],

    "Pasta": [
      { "name": "Alfredo", "price": { "veg": 549, "nonveg": 649 } },
      { "name": "Arrabbiata", "price": { "veg": 549, "nonveg": 649 } },
      { "name": "Parma rose", "price": { "veg": 549, "nonveg": 649 } },
      { "name": "Creamy pesto", "price": { "veg": 549, "nonveg": 649 } },
      { "name": "Aglio e olio", "price": { "veg": 549, "nonveg": 649 } }
    ],

    "Pizza Veg": [
      { "name": "Paneer tikka pizza", "price": 549 },
      { "name": "Farmhouse pizza", "price": 549 },
      { "name": "Margherita pizza", "price": 549 },
      { "name": "Sun kissed pizza", "price": 549 }
    ],

    "Pizza Nonveg": [
      { "name": "Chicken tikka pizza", "price": 649 },
      { "name": "BBQ chicken pizza", "price": 649 }
    ],

    "Asian Mains": [
      { "name": "Red Thai curry", "price": { "veg": 349, "nonveg": 449 } },
      { "name": "Hot garlic", "price": { "veg": 349, "nonveg": 449 } },
      { "name": "Chilli garlic noodles", "price": { "veg": 349, "nonveg": 399 } },
      { "name": "Hakka noodles", "price": 349, "type": "veg" },
      { "name": "Padthai noodles", "price": { "veg": 399, "nonveg": 449 } },
      { "name": "Fried rice", "price": { "veg": 349, "nonveg": 399 } },
      { "name": "Schezwan fried rice", "price": { "veg": 349, "nonveg": 399 } }
    ],

    "Indian Veg Main Course": [
      { "name": "Paneer lababdar", "price": 549 },
      { "name": "Paneer tikka masala", "price": 499 },
      { "name": "Kadhai paneer", "price": 499 },
      { "name": "Paneer makhani", "price": 499 },
      { "name": "Mushroom masala", "price": 499 },
      { "name": "Mix veg", "price": 499 },
      { "name": "Malai kofta", "price": 499 },
      { "name": "Dal makhani", "price": 449 },
      { "name": "Dal tadka", "price": 399 }
    ],

    "Indian Nonveg Main Course": [
      { "name": "Laal maas", "price": 649 },
      { "name": "Rogan josh", "price": 649 },
      { "name": "Butter chicken", "price": 549 },
      { "name": "Chicken tikka masala", "price": 549 },
      { "name": "Chicken curry", "price": 549 }
    ],

    "Egg Dishes": [
      { "name": "Egg bhurji", "price": 299 },
      { "name": "Egg curry", "price": 399 }
    ],

    "Rice": [
      { "name": "Jeera rice", "price": 249 },
      { "name": "Steam rice", "price": 199 },
      { "name": "Veg dum biryani", "price": 449, "type": "veg" },
      { "name": "Chicken dum biryani", "price": 549, "type": "nonveg" },
      { "name": "Mutton dum biryani", "price": 649, "type": "nonveg" }
    ],

    "Breads": [
      { "name": "Tandoori plain roti", "price": 49 },
      { "name": "Butter roti", "price": 79 },
      { "name": "Plain naan", "price": 119 },
      { "name": "Garlic naan", "price": 149 },
      { "name": "Butter naan", "price": 159 },
      { "name": "Cheese garlic naan", "price": 199 },
      { "name": "Chilli naan", "price": 199 },
      { "name": "Plain laccha paratha", "price": 149 },
      { "name": "Butter laccha paratha", "price": 169 },
      { "name": "Podina laccha paratha", "price": 169 },
      { "name": "Potato kulcha", "price": 149 },
      { "name": "Onion kulcha", "price": 149 },
      { "name": "Paneer kulcha", "price": 199 },
      { "name": "Missi roti", "price": 99 }
    ],

    "Sandwiches": [
      { "name": "Veg sandwich", "price": 199, "type": "veg" },
      { "name": "Chicken sandwich", "price": 299, "type": "nonveg" },
      { "name": "Veg grilled sandwich", "price": 249, "type": "veg" },
      { "name": "Chicken grilled sandwich", "price": 349, "type": "nonveg" }
    ],

    "Sushi": [
      { "name": "Vegetables tempura roll", "price": { "4pcs": 399, "8pcs": 699 }, "type": "veg" },
      { "name": "Asparagus roll", "price": { "4pcs": 399, "8pcs": 699 }, "type": "veg" },
      { "name": "Chicken tempura roll", "price": { "4pcs": 499, "8pcs": 799 }, "type": "nonveg" }
    ],

    "Coffee": {
      "Hot Classics": [
        { "name": "Espresso", "price": 150 },
        { "name": "Americano", "price": 160 },
        { "name": "Cappuccino", "price": 210 },
        { "name": "Latte", "price": 220 },
        { "name": "Macchiato", "price": 220 },
        { "name": "Mocha", "price": 250 },
        { "name": "Flat white", "price": 200 }
      ],
      "Flavoured Hot Coffee": [
        { "name": "Caramel latte", "price": 280 },
        { "name": "Vanilla cappuccino", "price": 280 },
        { "name": "Hazelnut mocha", "price": 280 }
      ],
      "Cold Coffee": [
        { "name": "Iced Americano", "price": 260 },
        { "name": "Iced latte", "price": 280 },
        { "name": "Classic cold coffee", "price": 280 },
        { "name": "Cold coffee with ice cream", "price": 300 },
        { "name": "Mocha frappe", "price": 280 },
        { "name": "Caramel cold coffee", "price": 300 },
        { "name": "Chocolate cold coffee", "price": 300 }
      ]
    },

    "Special Shots": [
      { "name": "Kala katta kick", "recipe": "Vodka, kala katta, black salt, lemon", "price": 399 },
      { "name": "Ginger bomb", "recipe": "Whisky, ginger juice, honey, lemon", "price": 399 },
      { "name": "Jager bomb", "recipe": "Jagermeister, Red Bull", "price": 599 },
      { "name": "Jazzy jamun", "recipe": "Jamun gin, jeera, black salt, lemon", "price": 499 },
      { "name": "Kamikaze", "recipe": "Vodka, orange, lime", "price": 399 },
      { "name": "Berry kamikaze", "recipe": "Vodka, cranberry, lime", "price": 399 }
    ],

    "Cocktails": [
      { "name": "Pahadi punch", "price": 599, "recipe": "Vodka, condensed milk, parsley syrup, wine foam, caramelized herbal flavor" },
      { "name": "Gulabi ras", "price": 599, "recipe": "Strawberry vodka, lemongrass, sweet & sour egg, citrusy flavor" },
      { "name": "Ayurtini", "price": 599, "recipe": "Gin, martini bianco, olive, herbal smoky flavor" },
      { "name": "Sage saanjh", "price": 599, "recipe": "Sage infused gin, yuzu & peach, tonic water, refreshing herbal sweetness" },
      { "name": "Jerra junoon", "price": 599, "recipe": "Coriander infused gin, cumin syrup, lemon juice, tonic water" },
      { "name": "Toffee tadka", "price": 599, "recipe": "Butter-washed whiskey, caramel syrup, lemon juice, egg white" },
      { "name": "Sufiyana sip", "price": 599, "recipe": "Jim Beam, tarragon syrup, pineapple juice, lemon juice, tropical caramel flavor" },
      { "name": "Street sour", "price": 599, "recipe": "Tequila, kala katta, Indian spice, ginger ale, citrusy sweet-spicy flavor" }
    ],

    "Mocktails": [
      { "name": "Litichi lagaan", "price": 299 },
      { "name": "Sunder sangam", "price": 299 },
      { "name": "Seb sutra", "price": 299 },
      { "name": "Hawa hawai high", "price": 299 },
      { "name": "Amrood masala", "price": 299 }
    ],

    "Beverages": [
      { "name": "Mineral water", "price": "MRP" },
      { "name": "Coke / Sprite / Diet coke cans", "price": 149 },
      { "name": "Tonic water", "price": 149 },
      { "name": "Ginger ale", "price": 149 },
      { "name": "Red Bull", "price": 299 },
      { "name": "Fresh lemon water", "price": 149 },
      { "name": "Fresh lemon soda", "price": 199 },
      { "name": "Choice of juice", "price": 199 },
      { "name": "Classic lemon ice tea", "price": 249 },
      { "name": "Peach ice tea", "price": 299 }
    ],

    "Shakes": [
      { "name": "Oreo shake", "price": 299 },
      { "name": "KitKat shake", "price": 299 },
      { "name": "Choco peanut bolt", "price": 299 },
      { "name": "Vanilla shake", "price": 299 },
      { "name": "Chocolate shake", "price": 299 },
      { "name": "Strawberry shake", "price": 299 },
      { "name": "Banana shake", "price": 299 },
      { "name": "Mixed berries shake", "price": 299 },
      { "name": "Brownie shake", "price": 299 }
    ],

     // The Alcohol data
    "Alcohol": {
      "Vodka": [
        { "name": "Absolute", "price": "₹ 490 ( 60 ml ) | ₹ 1375 ( 180 ml ) | ₹ 4620 ( bottle )" },
        { "name": "Grey goose", "price": "₹ 710 ( 60 ml ) | ₹ 1980 ( 180 ml ) | ₹ 7150 ( bottle )" }
      ],
      "Gin": [
        { "name": "Bombay sapphire", "price": "₹ 450 ( 60 ml ) | ₹ 1150 ( 180 ml ) | ₹ 4620 ( bottle )" },
        { "name": "Stranger & Son's", "price": "₹ 450 ( 60 ml ) | ₹ 1150 ( 180 ml ) | ₹ 4620 ( bottle )" },
        { "name": "Samsara", "price": "₹ 600 ( 60 ml ) | ₹ 1650 ( 180 ml ) | ₹ 6050 ( bottle )" }
      ],
      "Rum": [
        { "name": "Bacardi white", "price": "₹ 299 ( 60 ml ) | ₹ 799 ( 180 ml ) | ₹ 2999 ( bottle )" },
        { "name": "Old monk", "price": "₹ 249 ( 60 ml ) | ₹ 699 ( 180 ml ) | ₹ 2499 ( bottle )" }
      ],
      "Tequila": [
        { "name": "Patron silver", "price": "₹ 930 ( 60 ml ) | ₹ 2475 ( 180 ml ) | ₹ 9350 ( bottle )" },
        { "name": "Camino gold", "price": "₹ 550 ( 60 ml ) | ₹ 1480 ( 180 ml ) | ₹ 4950 ( bottle )" },
        { "name": "Camino silver", "price": "₹ 490 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 4620 ( bottle )" }
      ],
      "Blended Scotch Whisky": [
        { "name": "Johnnie Walker Black Label", "price": "₹ 650 ( 60 ml ) | ₹ 1870 ( 180 ml ) | ₹ 6820 ( bottle )" },
        { "name": "Johnnie Walker Red Label", "price": "₹ 480 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 5170 ( bottle )" },
        { "name": "Chivas Regal 12yr", "price": "₹ 650 ( 60 ml ) | ₹ 1870 ( 180 ml ) | ₹ 6820 ( bottle )" },
        { "name": "Teacher's 50", "price": "₹ 480 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 5170 ( bottle )" },
        { "name": "100 Pipers", "price": "₹ 480 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 5170 ( bottle )" }
      ],
      "Single Malt Whisky": [
        { "name": "Glenlivet 12yr", "price": "₹ 1040 ( 60 ml ) | ₹ 3025 ( 180 ml ) | ₹ 10450 ( bottle )" },
        { "name": "Indri", "price": "₹ 1040 ( 60 ml ) | ₹ 3025 ( 180 ml ) | ₹ 10450 ( bottle )" }
      ],
      "World Whisky": [
        { "name": "Jameson", "price": "₹ 490 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 5170 ( bottle )" },
        { "name": "Jim Beam", "price": "₹ 490 ( 60 ml ) | ₹ 1320 ( 180 ml ) | ₹ 5170 ( bottle )" },
        { "name": "Jack Daniels", "price": "₹ 710 ( 60 ml ) | ₹ 1925 ( 180 ml ) | ₹ 7150 ( bottle )" }
      ],
      "Red Wine": [
        { "name": "Jacob’s Creek Shiraz", "price": "₹ 649 ( glass ) | ₹ 2999 ( bottle )" },
        { "name": "Sula Cabernet Shiraz", "price": "₹ 499 ( glass ) | ₹ 2299 ( bottle )" },
        { "name": "Fratelli Shiraz", "price": "₹ 499 ( glass ) | ₹ 2299 ( bottle )" }
      ],
      "White Wine": [
        { "name": "Jacob’s Creek Chardonnay", "price": "₹ 649 ( glass ) | ₹ 2999 ( bottle )" },
        { "name": "Sula Sauvignon Blanc", "price": "₹ 499 ( glass ) | ₹ 2299 ( bottle )" },
        { "name": "Fratelli Sauvignon Blanc", "price": "₹ 499 ( glass ) | ₹ 2299 ( bottle )" }
      ],
      "Liqueurs": [
        { "name": "Jagermeister", "price": "₹ 599 ( 60 ml ) | ₹ 6999 ( bottle )" },
        { "name": "Baileys", "price": "₹ 499 ( 60 ml ) | ₹ 4999 ( bottle )" }
      ],
      "Sparkling Wine": [
        { "name": "Sula Brut", "price": "₹ 4999 ( bottle )" },
        { "name": "Cinzano Prosecco", "price": "₹ 4999 ( bottle )" }
      ],
      "Beers": [
        { "name": "Kingfisher Premium", "price": "₹ 349 ( 330 ml ) | ₹ 1499 ( bucket )" },
        { "name": "Kingfisher Ultra", "price": "₹ 399 ( 330 ml ) | ₹ 1799 ( bucket )" },
        { "name": "Budweiser", "price": "₹ 399 ( 330 ml ) | ₹ 1799 ( bucket )" },
        { "name": "Corona", "price": "₹ 549 ( 330 ml ) | ₹ 2499 ( bucket )" }
      ],
      "Breezers": [
        { "name": "Cranberry", "price": "₹ 299 ( 275 ml ) | ₹ 1299 ( bucket )" },
        { "name": "Jamaican", "price": "₹ 299 ( 275 ml ) | ₹ 1299 ( bucket )" },
        { "name": "Blueberry", "price": "₹ 299 ( 275 ml ) | ₹ 1299 ( bucket )" }
      ]
    }
  }
};

// --- Custom Color Mapping ---
const COLORS = {
  darkGreen: "#142d25",
  mutedGreen: "#607a62",
  gold: "#b9985c",
  beige: "#eae0d0",
};

// --- ICON WRAPPER COMPONENT ---
function IconRound({ src, label, active }) {
  return (
    <div
      className={`p-[6px] rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden
      ${
        active
          ? "bg-[#142d25] ring-4 ring-[#b9985c]" // Active state: same as before
          : "bg-[#142d25] border-2 border-[#142d25]" // Inactive: dark background
      }`}
    >
      <img
        src={src}
        alt={label}
        className={`w-10 h-10 object-contain rounded-full transition-transform duration-300 ${
          active ? "scale-110" : "scale-100 opacity-90"
        }`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/80x80/cccccc/000000?text=${label.substring(
            0,
            1
          )}`;
        }}
      />
    </div>
  );
}

// --- VEG / NON-VEG ICONS ---
function IconVeg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mr-2 mt-1"
    >
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="13"
        rx="1"
        fill="white"
        stroke="#10B981"
        strokeWidth="1.5"
      />
      <circle cx="7" cy="7" r="3.5" fill="#10B981" />
    </svg>
  );
}
function IconNonVeg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mr-2 mt-1"
    >
      <path
        d="M7 1L1 13H13L7 1Z"
        fill="#EF4444"
        stroke="#EF4444"
        strokeWidth="1.5"
      />
      <circle cx="7" cy="8.5" r="2" fill="white" />
    </svg>
  );
}
const VegBadge = () => <IconVeg />;
const NonVegBadge = () => <IconNonVeg />;

// --- GENERIC ICONS ---
const IconList = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 7h16M4 17h16M4 12h16" />
  </svg>
);
const IconBack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- MENU COMPONENT ---
function Menu({ onBack }) {
  const data = menuData;
  const menuCategories = data.menu || {};

  const [currentMain, setCurrentMain] = useState("Starters");
  const [expanded, setExpanded] = useState(null);

  const allCategories = Object.keys(menuCategories);

  const startersCategories = [
    "Salads",
    "Soups",
    "Indian Veg Starters",
    "Indian Nonveg Starters",
    "Platters",
    "Chinese Veg Starters",
    "Chinese Nonveg Starters",
    "Momos (Steamed)",
    "Continental Veg Starters",
    "Continental Nonveg Starters",
  ];
  const mainsCategories = [
    "Pasta",
    "Pizza Veg",
    "Pizza Nonveg",
    "Asian Mains",
    "Indian Veg Main Course",
    "Indian Nonveg Main Course",
    "Egg Dishes",
    "Rice",
    "Breads",
    "Sandwiches",
    "Sushi",
  ];
  const beveragesCategories = ["Coffee", "Mocktails", "Beverages", "Shakes"];
  const barCategories = ["Alcohol", "Special Shots", "Cocktails"];

  const buckets = {
    Starters: allCategories.filter((c) => startersCategories.includes(c)),
    Mains: allCategories.filter((c) => mainsCategories.includes(c)),
    Beverages: allCategories.filter((c) => beveragesCategories.includes(c)),
    Bar: allCategories.filter((c) => barCategories.includes(c)),
  };

  useEffect(() => {
    if (!buckets[currentMain] || buckets[currentMain].length === 0) {
      const first = Object.keys(buckets).find((k) => buckets[k].length > 0);
      if (first) setCurrentMain(first);
    }
  }, [currentMain, buckets]);

  const toggleExpand = (cat) => setExpanded((prev) => (prev === cat ? null : cat));

  function getItemBadge(item, category) {
    const mainCategory = Object.entries(buckets).find(([, cats]) =>
      cats.includes(category)
    )?.[0];
    const text = category.toLowerCase();
    const nonVegHints = ["nonveg", "chicken", "mutton", "fish", "egg"];
    const vegHints = [
      "veg",
      "paneer",
      "mushroom",
      "broccoli",
      "salads",
      "soups",
      "breads",
      "rice",
    ];
    if (mainCategory === "Starters" || mainCategory === "Mains") {
      if (nonVegHints.some((x) => text.includes(x))) return <NonVegBadge />;
      if (vegHints.some((x) => text.includes(x))) return <VegBadge />;
    }
    if (item.type === "veg") return <VegBadge />;
    if (item.type === "nonveg") return <NonVegBadge />;
    return null;
  }

  function renderPrice(price) {
    if (typeof price === "object") {
      return (
        <span className="flex flex-col items-end">
          {Object.entries(price).map(([k, v]) => {
            let badge =
              k === "veg" ? <VegBadge /> : k === "nonveg" ? <NonVegBadge /> : null;
            return (
              <span key={k} className="flex items-center text-sm sm:text-base">
                {badge}
                <span className="capitalize me-1 font-normal text-[#607a62]">
                  {k}:
                </span>
                <span className="text-[#b9985c] font-semibold">
                  {typeof v === "number" ? `₹${v}` : v}
                </span>
              </span>
            );
          })}
        </span>
      );
    }
    if (typeof price === "number") return `₹${price}`;
    if (typeof price === "string")
      return (
        <div className="flex flex-col items-end text-sm sm:text-base font-semibold text-[#b9985c] leading-snug">
          {price.split(/\s*\|\s*/).map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      );
    return price;
  }

  function renderCategoryCard(cat) {
    const raw = menuCategories[cat];
    if (!raw) return null;
    const totalItems = Array.isArray(raw)
      ? raw.length
      : Object.values(raw).reduce(
          (sum, sub) => sum + (Array.isArray(sub) ? sub.length : 0),
          0
        );

    return (
      <div
        key={cat}
        className="bg-white rounded-xl shadow-md mb-2 border-b border-gray-100/80"
      >
        <div
          className="flex items-center justify-between cursor-pointer p-4"
          onClick={() => toggleExpand(cat)}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#142d25] flex items-center justify-center text-[#eae0d0] shadow-lg">
              <IconList />
            </div>
            <div>
              <div className="text-lg font-semibold text-[#142d25] uppercase">
                {cat}
              </div>
              <div className="text-sm text-[#607a62]">{totalItems} items</div>
            </div>
          </div>
          <div className="text-[#142d25]">
            {expanded === cat ? <IconChevronUp /> : <IconChevronDown />}
          </div>
        </div>

        {expanded === cat && (
          <div className="mt-2 space-y-1 pt-2 px-4 pb-4 border-t border-gray-100">
            {Array.isArray(raw)
              ? raw.map((it, idx) => (
                  <div
                    key={idx}
                    className="bg-white py-3 flex justify-between items-start border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-start">
                        {getItemBadge(it, cat)}
                        <div className="font-semibold text-[#142d25] leading-tight pt-[2px]">
                          {it.name}
                        </div>
                      </div>
                      {it.recipe && (
                        <div className="text-xs text-[#607a62] mt-1 ml-[22px]">
                          {it.recipe}
                        </div>
                      )}
                    </div>
                    <div className="font-semibold whitespace-nowrap text-right ml-2 text-[#b9985c]">
                      {renderPrice(it.price)}
                    </div>
                  </div>
                ))
              : Object.entries(raw).map(([subcat, items]) => (
                  <div key={subcat} className="mb-4">
                    <div className="text-md font-extrabold text-[#142d25] mb-2 mt-2 border-b border-gray-200 pb-1 uppercase">
                      {subcat}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                      {items.map((it, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 flex justify-between items-start border border-gray-100 rounded-lg hover:shadow-sm transition"
                        >
                          <div className="flex-1 min-w-0 pr-2">
                            <div className="flex items-start">
                              {getItemBadge(it, subcat)}
                              <div className="font-semibold text-[#142d25] leading-tight pt-[2px]">
                                {it.name}
                              </div>
                            </div>
                            {it.recipe && (
                              <div className="text-xs text-[#607a62] mt-1 ml-[22px]">
                                {it.recipe}
                              </div>
                            )}
                          </div>
                          <div className="font-semibold whitespace-nowrap text-right ml-2 text-[#b9985c]">
                            {renderPrice(it.price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#142d25] flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-[#142d25] text-[#eae0d0] py-4 px-4 sm:px-6 shadow-xl sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="text-[#b9985c] p-2 hover:bg-[#b9985c]/10 rounded-full transition"
              >
                <IconBack />
              </button>
            )}
            <div className="w-10 h-10 rounded-full bg-[#b9985c] flex items-center justify-center text-[#142d25] font-bold text-xl">
              C
            </div>
            <h1 className="text-2xl font-extrabold tracking-widest uppercase">
              Craveo
            </h1>
          </div>
          <div className="hidden sm:block text-sm text-[#b9985c]">
            A Taste of Delight
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 sm:py-8">
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#142d25] pb-2">
            Pick what makes you happy
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex gap-2 sm:gap-4 justify-between sm:justify-center flex-wrap border-b-2 border-[#b9985c]/50 pb-4 mb-6">
            {[
              { key: "Starters", img: StartersImg },
              { key: "Mains", img: MainsImg },
              { key: "Beverages", img: BeverageImg },
              { key: "Bar", img: BarImg },
            ].map(({ key, img }) => {
              const isActive = currentMain === key;
              return (
                <button
                  key={key}
                  onClick={() => setCurrentMain(key)}
                  className="flex flex-col items-center gap-2 p-1 sm:p-2"
                >
                  <IconRound src={img} label={key} active={isActive} />
                  <div
                    className={`text-xs sm:text-sm font-bold transition ${
                      isActive
                        ? "text-[#142d25] border-b-2 border-[#b9985c] pb-[2px]"
                        : "text-[#b9985c]"
                    }`}
                  >
                    {key.toUpperCase()}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* MENU LIST */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#142d25]">
            Menu
          </h3>
          <div className="space-y-4">
            {buckets[currentMain] && buckets[currentMain].length > 0 ? (
              buckets[currentMain].map((cat) => renderCategoryCard(cat))
            ) : (
              <div className="text-[#607a62] text-center py-10 text-lg">
                No categories found for this selection.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[#142d25] text-[#eae0d0] text-center py-4 mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Craveo | Crafted with ❤️
        </p>
      </footer>
    </div>
  );
}

// --- ROOT APP ---
export default function CraveoApp() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="font-sans min-h-screen">
      {isMenuVisible ? (
        <Menu onBack={() => setIsMenuVisible(false)} />
      ) : (
        <Dashboard onViewMenu={() => setIsMenuVisible(true)} />
      )}
    </div>
  );
}
