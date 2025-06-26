import React, { useState } from "react";
import ReportList from "../components/ReportList";
import CategoryFilter from "../components/CategoryFilter";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-5 py-5 md:py-10">
      <h1 className="mb-8 md:mb-12 text-3xl xl:text-4xl font-bold text-center text-red-500">
        Reports Dashboard
      </h1>
      <CategoryFilter
        selectedOption={selectedCategory}
        onSelectOption={handleCategorySelect}
      />
      <ReportList categoryFilter={selectedCategory} />
    </div>
  );
}
