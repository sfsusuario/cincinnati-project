import React from 'react';
import { useState } from "react";

export default function Clients() {
  const [count, setCount] = useState<string>("");

  function onClick() {
    fetch("/api/count", { method: "POST" })
      .then((response) => response.text())
      .then(setCount);
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
              Edit
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
              1
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              Jone Doe
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              jonne62@gmail.com
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <a
                className="text-green-500 hover:text-green-700"
                href="#"
              >
                Edit
              </a>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <a
                className="text-red-500 hover:text-red-700"
                href="#"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}