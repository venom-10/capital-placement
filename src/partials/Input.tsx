import React from "react";
import { Field } from "../form-fields";

export default function Input(props: { field: Field; id: number }) {
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
    </div>
  );
}
