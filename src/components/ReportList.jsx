import axios from "axios";
import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import Loader from "./Loader";

export default function ReportList({ categoryFilter }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/reports/reports.json");
        setTimeout(() => {
          const filteredReports = categoryFilter
            ? res.data.filter((report) => report.category === categoryFilter)
            : res.data;
          console.log("Reports List:", filteredReports);
          setReports(filteredReports);
          setError(null);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setError("Failed to load reports.");
        setLoading(false);
      }
    };
    fetchReports();
  }, [categoryFilter]);

  if (error) {
    return <p className="text-center text-red-500 my-10">{error}</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {categoryFilter && (
        <p className="text-center mb-10 text-lg text-gray-500">
          {reports.length} result{reports.length !== 1 ? "s" : ""} found for{" "}
          <b>{categoryFilter}</b>
        </p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
