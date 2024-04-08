import { useEffect, useState } from "react";
import DropdownCheckboxButton from "../components/Dropdown/Dropdown";
import DropdownbrandCheckboxButton from "../components/Dropdown/Dropdownbrand";
import DropdownpriceCheckboxButton from "../components/Dropdown/Dropdownprice";
import ProductCard from "../components/productCard/ProductCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ProductListing() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [localState, setLocalState] = useState({
    searchResult: [],
    selectedSortOptions: [],
  });
  let search = queryParams.get("search");
  let brand = queryParams.get("brand");
  let subCategory = queryParams.get("subCategory");
  let { searchResult, selectedSortOptions } = localState;
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${brand}", "name": "${search}"}`,
      headers: {
        projectID: "f104bi07c490",
      },
    })
      .then((res) => {
        setLocalState((s) => ({ ...s, searchResult: res.data.data }));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [brand, search]);

  const handleChange = (obj) => {
    if (selectedSortOptions.some((item) => item.value === obj.value)) {
      setLocalState((s) => ({
        ...s,
        selectedSortOptions: s.selectedSortOptions.filter(
          (x) => x.value !== obj.value
        ),
      }));
      return;
    }
    setLocalState((s) => ({
      ...s,
      selectedSortOptions: [...s.selectedSortOptions, obj],
    }));
  };
  return (
    <>
      <div className="w-[calc(100%-2rem)] max-w-[80rem] mx-[auto]">
        <h1 className="text-white text-[30px] w-100 mt-[18px] font-bold">
          Results For "{search}"
        </h1>
        <div className="flex pt-[26px] gap-[7px] justify-between">
          <div className="flex gap-[7px]">
            <DropdownCheckboxButton />
            <DropdownbrandCheckboxButton />
            <DropdownpriceCheckboxButton />
          </div>
          <div>
            <DropdownCheckboxButton
              options={[
                { label: "Sort By Name", value: "name" },
                { label: "Price Low to High", value: "price" },
                { label: "Sort By Category", value: "category" },
              ]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-[1rem] py-[70px]">
          {searchResult.map((item) => {
            return (
              <ProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                displayImage={item.displayImage}
                ratings={item.ratings}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductListing;
