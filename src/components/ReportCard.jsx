import React from "react";
import { MdDateRange } from "react-icons/md";

export default function ReportCard({ report }) {
  return (
    <div
      className="p-5 rounded-2xl shadow-md bg-zinc-50 hover:bg-zinc-200 border-2 border-zinc-200 cursor-pointer"
      id={`report-${report.id}`}
    >
      <h2 className="font-medium text-xl mb-3">{report.name}</h2>
      <p className="text-gray-800 mb-3 ">
        <span className="font-medium">Category:</span> {report.category}
      </p>
      <p className="text-gray-500 flex items-center gap-2">
        <MdDateRange className="text-xl" />
        <span>
          <span className="font-medium">Created:</span> {report.creationDate}
        </span>
      </p>
    </div>
  );
}
