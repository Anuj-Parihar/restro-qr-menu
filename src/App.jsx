//this below code is perfectly run with back tracking

// import { useState, useEffect } from "react";
// import Dashboard from "./components/Dashboard";
// import MenuType from "./components/MenuType";
// import MenuCategory from "./components/MenuCategory";
// import MenuItems from "./components/MenuItems";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import menuData from "./data.json";

// export default function App() {
//   const [step, setStep] = useState("dashboard");
//   const [selectedType, setSelectedType] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);

//   // 🧠 Restore session on reload
//   useEffect(() => {
//     const savedStep = sessionStorage.getItem("step");
//     const savedType = sessionStorage.getItem("selectedType");
//     const savedCategory = sessionStorage.getItem("selectedCategory");
//     const savedSub = sessionStorage.getItem("selectedSubCategory");

//     if (savedStep) setStep(savedStep);
//     if (savedType) setSelectedType(savedType);
//     if (savedCategory) setSelectedCategory(savedCategory);
//     if (savedSub) setSelectedSubCategory(savedSub);
//   }, []);

//   // 💾 Persist session on change
//   useEffect(() => {
//     sessionStorage.setItem("step", step);
//     if (selectedType) sessionStorage.setItem("selectedType", selectedType);
//     if (selectedCategory) sessionStorage.setItem("selectedCategory", selectedCategory);
//     if (selectedSubCategory) sessionStorage.setItem("selectedSubCategory", selectedSubCategory);
//   }, [step, selectedType, selectedCategory, selectedSubCategory]);

//   // 🧭 Handle back button
//   useEffect(() => {
//     const handlePopState = () => {
//       setStep((prev) => {
//         if (prev === "items" && selectedSubCategory) {
//           setSelectedSubCategory(null);
//           return "subcategory";
//         } else if (prev === "items") {
//           setSelectedCategory(null);
//           return "category";
//         } else if (prev === "subcategory") {
//           setSelectedCategory(null);
//           return "category";
//         } else if (prev === "category") {
//           setSelectedType(null);
//           return "menuType";
//         } else if (prev === "menuType") {
//           return "dashboard";
//         } else {
//           return "dashboard";
//         }
//       });
//     };

//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, [selectedType, selectedCategory, selectedSubCategory]);

//   // 🔹 Go to a new step and push to browser history
//   const goToStep = (newStep) => {
//     window.history.pushState({ step: newStep }, "", "");
//     setStep(newStep);
//   };

//   const handleViewMenu = () => goToStep("menuType");

//   const handleSelectType = (type) => {
//     setSelectedType(type);
//     setSelectedCategory(null);
//     setSelectedSubCategory(null);
//     goToStep("category");
//   };

//   const handleSelectCategory = (category) => {
//     const data =
//       selectedType === "food"
//         ? menuData.menu[category]
//         : menuData.menu.Alcohol[category] || menuData.menu[category];

//     if (typeof data === "object" && !Array.isArray(data)) {
//       setSelectedCategory(category);
//       setSelectedSubCategory(null);
//       goToStep("subcategory");
//     } else {
//       setSelectedCategory(category);
//       setSelectedSubCategory(null);
//       goToStep("items");
//     }
//   };

//   const handleSelectSubCategory = (subCat) => {
//     setSelectedSubCategory(subCat);
//     goToStep("items");
//   };

//   // 📦 Content rendering
//   let content;
//   if (step === "dashboard") {
//     content = <Dashboard onViewMenu={handleViewMenu} />;
//   } else if (step === "menuType") {
//     content = <MenuType onSelectType={handleSelectType} />;
//   } else if (step === "category") {
//     const categories =
//       selectedType === "food"
//         ? Object.keys(menuData.menu).filter(
//             (c) => !["Alcohol", "Coffee"].includes(c)
//           )
//         : Object.keys(menuData.menu.Alcohol);
//     content = (
//       <MenuCategory
//         categories={categories}
//         onSelectCategory={handleSelectCategory}
//       />
//     );
//   } else if (step === "subcategory") {
//     const subCategories = Object.keys(menuData.menu.Alcohol[selectedCategory]);
//     content = (
//       <MenuCategory
//         categories={subCategories}
//         onSelectCategory={handleSelectSubCategory}
//       />
//     );
//   } else if (step === "items") {
//     const data =
//       selectedSubCategory
//         ? menuData.menu.Alcohol[selectedCategory][selectedSubCategory]
//         : menuData.menu[selectedCategory] ||
//           menuData.menu.Alcohol[selectedCategory];
//     content = (
//       <MenuItems
//         items={data}
//         title={selectedSubCategory || selectedCategory}
//       />
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-beige text-darkGreen">
//       <Header />
//       <main className="flex-grow">{content}</main>
//       <Footer />
//     </div>
//   );
// }

//this below code is perfectly run with back tracking and also perfect reload feature

import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import MenuType from "./components/MenuType";
import MenuCategory from "./components/MenuCategory";
import MenuItems from "./components/MenuItems";
import Header from "./components/Header";
import Footer from "./components/Footer";
import menuData from "./data.json";

export default function App() {
  // ✅ Initialize directly from sessionStorage
  const [step, setStep] = useState(() => sessionStorage.getItem("step") || "dashboard");
  const [selectedType, setSelectedType] = useState(() => sessionStorage.getItem("selectedType"));
  const [selectedCategory, setSelectedCategory] = useState(() => sessionStorage.getItem("selectedCategory"));
  const [selectedSubCategory, setSelectedSubCategory] = useState(() => sessionStorage.getItem("selectedSubCategory"));

  // 💾 Persist session on change
  useEffect(() => {
    sessionStorage.setItem("step", step);
    if (selectedType) sessionStorage.setItem("selectedType", selectedType);
    if (selectedCategory) sessionStorage.setItem("selectedCategory", selectedCategory);
    if (selectedSubCategory) sessionStorage.setItem("selectedSubCategory", selectedSubCategory);
  }, [step, selectedType, selectedCategory, selectedSubCategory]);

  // 🧭 Handle back button
  useEffect(() => {
    const handlePopState = () => {
      setStep((prev) => {
        if (prev === "items" && selectedSubCategory) {
          setSelectedSubCategory(null);
          return "subcategory";
        } else if (prev === "items") {
          setSelectedCategory(null);
          return "category";
        } else if (prev === "subcategory") {
          setSelectedCategory(null);
          return "category";
        } else if (prev === "category") {
          setSelectedType(null);
          return "menuType";
        } else if (prev === "menuType") {
          return "dashboard";
        } else {
          return "dashboard";
        }
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedType, selectedCategory, selectedSubCategory]);

  // 🔹 Go to a new step and push to browser history
  const goToStep = (newStep) => {
    window.history.pushState({ step: newStep }, "", "");
    setStep(newStep);
  };

  const handleViewMenu = () => goToStep("menuType");

  const handleSelectType = (type) => {
    setSelectedType(type);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    goToStep("category");
  };

  const handleSelectCategory = (category) => {
    const data =
      selectedType === "food"
        ? menuData.menu[category]
        : menuData.menu.Alcohol[category] || menuData.menu[category];

    if (typeof data === "object" && !Array.isArray(data)) {
      setSelectedCategory(category);
      setSelectedSubCategory(null);
      goToStep("subcategory");
    } else {
      setSelectedCategory(category);
      setSelectedSubCategory(null);
      goToStep("items");
    }
  };

  const handleSelectSubCategory = (subCat) => {
    setSelectedSubCategory(subCat);
    goToStep("items");
  };

  // 📦 Content rendering
  let content;
  if (step === "dashboard") {
    content = <Dashboard onViewMenu={handleViewMenu} />;
  } else if (step === "menuType") {
    content = <MenuType onSelectType={handleSelectType} />;
  } else if (step === "category") {
    const categories =
      selectedType === "food"
        ? Object.keys(menuData.menu).filter(
            (c) => !["Alcohol", "Coffee"].includes(c)
          )
        : Object.keys(menuData.menu.Alcohol);
    content = (
      <MenuCategory
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
    );
  } else if (step === "subcategory") {
    const subCategories = Object.keys(menuData.menu.Alcohol[selectedCategory]);
    content = (
      <MenuCategory
        categories={subCategories}
        onSelectCategory={handleSelectSubCategory}
      />
    );
  } else if (step === "items") {
    const data =
      selectedSubCategory
        ? menuData.menu.Alcohol[selectedCategory][selectedSubCategory]
        : menuData.menu[selectedCategory] ||
          menuData.menu.Alcohol[selectedCategory];
    content = (
      <MenuItems
        items={data}
        title={selectedSubCategory || selectedCategory}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-beige text-darkGreen">
      <Header />
      <main className="flex-grow">{content}</main>
      <Footer />
    </div>
  );
}

