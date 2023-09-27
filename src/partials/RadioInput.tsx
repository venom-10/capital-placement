import React from "react";
import { Field } from "../form-fields";

export default function RadioInput(props: { field: Field; id: number }) {
  let name = props.field.name.replaceAll("_", " ");
  name = name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div key={props.id} className="relative z-0 w-full mb-6 group">
      <input
        type={props.field.type}
        name={props.field.name}
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label className="font-medium text-xl absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600">
        {name}
      </label>
      <div className="flex items-center mb-4 absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[14px] right-40 -z-10 origin-[0]">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Internal
        </label>
      </div>
      <label className="inline-flex items-center cursor-pointer absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0]">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Hide me
        </span>
      </label>
    </div>
  );
}
