import { useContext, useEffect, useState } from "react";
import DropdownCheckboxButton from "../components/Dropdown/Dropdown";
import DropdownbrandCheckboxButton from "../components/Dropdown/Dropdownbrand";
import DropdownpriceCheckboxButton from "../components/Dropdown/Dropdownprice";
import ProductCard from "../components/productCard/ProductCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../App";


function ProductListing() {
  const {globalState,  setGlobalState} = useContext(StateContext)
  let {menu} = globalState
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [localState, setLocalState] = useState({
    searchResult: [],
    selectedSortOptions: [],
  });
  const [filterState, setFilterState] = useState({
    filterResult: [],
    selectedFilterOptions: [],
  });
  let search = queryParams.get("search");
  let brand = queryParams.get("brand");
  let category = queryParams.get("category");
  let subCategory = queryParams.get("subCategory");
  let { searchResult, selectedSortOptions } = localState;
  let { filterResult, selectedFilterOptions } = filterState;
  let filterOptions = menu?.map((item,index)=>{
    
    return {
       label: item,
       value: item
    }
  }) 
  

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${brand}", "name": "${search}", "category":"${category}"}`,
      headers: {
        projectID: "f104bi07c490",
      },
    })
      .then((res) => {
        setLocalState((s) => ({ ...s, searchResult: res.data.data, filterResult: res.data.data }));
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
  


useEffect(() => {
    axios({
      method: "GET",
      url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${brand}","category":"${category}"}`,
      headers: {
        projectID: "f104bi07c490",
      },
    })
      .then((res) => {
        setFilterState((s) => ({ ...s, filterResult: res.data.data }));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [brand, category]);


  const handleFilter = (obj)=>{
      if(selectedFilterOptions.some((item) => item.value === obj.value)) {
        setFilterState((s) => ({
          ...s,selectedFilterOptions: s.selectedFilterOptions.filter(
            (x) => x.value !== obj.value
          ),
        }));
        return;
      }
      setFilterState((s) => ({
        ...s,
        selectedFilterOptions: [...s.selectedFilterOptions, obj],
      }));
  };
console.log(selectedFilterOptions)
  return (
    <>
      <div className="w-[calc(100%-2rem)] max-w-[80rem] mx-[auto]">
        <h1 className="text-white text-[30px] w-100 mt-[18px] font-bold">
          Results For "{search}"
        </h1>
        <div className="flex pt-[26px] gap-[7px] justify-between">
          <div className="flex gap-[7px]">
            <DropdownCheckboxButton 
            options={filterOptions}
            onChange={handleFilter}

            />
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
