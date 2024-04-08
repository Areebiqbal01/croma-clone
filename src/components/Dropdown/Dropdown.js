import React, { useState, useId } from "react";

function DropdownCheckboxButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const RandomId = useId();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let { options = [], onChange } = props;

  return (
    <>
      <div className="relative">
        <button
          id={"dropdownHelperButton" + RandomId}
          onClick={toggleDropdown}
          className="text-white bg-[#393939] leading-[20px] py-[8px]  hover:bg-[#393939] focus:ring-4 focus:ring-transparent focus:outline-none rounded-lg text-sm px-5 text-center inline-flex items-center"
          type="button"
        >
          Dropdown checkbox{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            id={RandomId}
            className="absolute z-10 bg-[#393939] top-[38px] divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="p-[6px] space-y-1 text-sm "
              aria-labelledby={"dropdownHelperButton" + RandomId}
            >
              {options.map((item, index) => {
                return (
                  <li key={item.label}>
                    <div className="flex p-2 rounded py-[4px] dark:hover:bg-gray-600">
                      <div className="flex items-center h-5">
                        <input
                          id="helper-checkbox-1"
                          aria-describedby="helper-checkbox-text-1"
                          type="checkbox"
                          value=""
                          onChange={() => onChange(item)}
                          className="w-5 h-5 text-[#12daa8] bg-[#393939] border-gray-300 focus:ring-transparent "
                        />
                      </div>
                      <div className="ms-2 text-sm">
                        <label
                          htmlFor="helper-checkbox-1"
                          className=" text-[white] dark:text-gray-300"
                        >
                          <div>{item.label}</div>
                        </label>
                      </div>
                    </div>
                  </li>
                );
              })}
              {/* <li>
              <div className="flex p-2 py-[4px] rounded  dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox-2"
                    aria-describedby="helper-checkbox-text-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label htmlFor="helper-checkbox-2" className=" text-[white] dark:text-gray-300">
                    <div>Enable 2FA auth</div>
                   
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 py-[4px] rounded ">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox-3"
                    aria-describedby="helper-checkbox-text-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label htmlFor="helper-checkbox-3" className=" text-[white] dark:text-gray-300">
                    <div>Subscribe newsletter</div>
                    
                  </label>
                </div>
              </div>
            </li> */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default DropdownCheckboxButton;
