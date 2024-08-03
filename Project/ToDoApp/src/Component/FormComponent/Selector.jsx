import React from "react";
import { Controller } from "react-hook-form";
const Selector = React.forwardRef(
  ({ options, initialvalue, className, ...props }, ref) => {
    return (
      <>
        <div className=" bg-gray-100 p-6">
          <label
            htmlFor="options"
            className="mb-2 text-lg font-medium text-gray-700"
          >
            Select an option:
          </label>
          <br />
          <select
            id="options"
            ref={ref}
            defaultValue={initialvalue}
            {...props}
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="mt-4 text-xl text-gray-800"></div>
        </div>
      </>
    );
  }
);

export default Selector;
