import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CategoryFilter({ selectedOption, onSelectOption }) {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const res = await axios.get("/reports/reports.json");
        const uniqueCategories = res.data.reduce((acc, report) => {
          if (!acc.includes(report.category)) {
            acc.push(report.category);
          }
          return acc;
        }, []);
        console.log("Filter Options:", uniqueCategories);
        setFilterOptions(uniqueCategories);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchFilterOptions();
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onSelectOption(selectedValue);
  };

  return (
    <div className="text-center mb-10">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="min-w-full md:min-w-[32%] border-2 border-gray-500 rounded-xl py-2 px-3 mx-auto text-lg  appearance-none"
      >
        <option value="">All</option>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
