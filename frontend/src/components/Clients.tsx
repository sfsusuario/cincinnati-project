import React from 'react';
import { useState } from "react";

export default function Clients() {

  const example_data = [
    { 
      id: 1,
      count: 0,
      name: "Sam",
      email: "mail@domain.com"
    },
    {
      id: 2,
      count: 0,
      name: "Dough",
      email: "mail@domain.com"
    }
  ];

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
              Count
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {example_data.map( row => 
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {row.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {row.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {row.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {row.count}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a
                  className="text-green-500 hover:text-green-700"
                  href="#"
                >
                  Increment
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}