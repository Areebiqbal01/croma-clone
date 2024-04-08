import { useEffect } from "react";

const useClickOutside = (onFocus, datasetArr, closeFunc) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(e) {
      let bool = false;
      for (let dataset of datasetArr) {
        if (bool) break;
        bool = e.target.closest(dataset) ? true : false;
      }
      if (!bool && closeFunc) {
        return closeFunc();
      }
    }
    /**
     * Close dropdown when Tab key is pressed
     */
    function handleTabKey(e) {
      if (e.key === "Tab" && closeFunc) {
        return closeFunc();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleTabKey);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [onFocus]);
  return null;
};

export default useClickOutside;
