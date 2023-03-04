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
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
              {example_data.map( row => 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {row.id}
                    </th>
                    <td className="px-6 py-4">
                      {row.name}  
                    </td>
                    <td className="px-6 py-4">
                      {row.email}
                    </td>
                    <td className="px-6 py-4">
                      {row.count}
                    </td>
                    <td className="px-6 py-4">
                      <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Alternative
                      </button>
                    </td>
                </tr>
              )}
            </tbody>
        </table>
    </div>
  );
}