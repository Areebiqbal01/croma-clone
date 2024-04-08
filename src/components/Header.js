import React, { useContext, useState } from "react";
import logo from "../assests/logo.svg";
import { IoMenuOutline, IoPencil } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Box from "./Box";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Menu from "./menuDropdown/Menu";
import axios from "axios";
import useClickOutside from "../hooks/useClickOutside";

function Header() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  function closeModal() {
    setModalOpen(false);
  }

  const handleFocus = () => {
    setSearchFocused(true);
  };
  const onClose = (item) => {
    setSearchFocused(false);
  };

  const handleChange = (e) => {
    let text = e.target.value;
    setSearch(e.target.value);

    axios({
      method: "GET",
      url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${text}"}`,
      headers: {
        projectID: "f104bi07c490",
      },
    })
      .then((res) => {
        setSearchResult(res.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useClickOutside(isSearchFocused, ["[data-search-content]"], onClose);

  return (
    <header className="bg-black text-white flex justify-between h-20">
      {/*desktop and table version*/}

      <Box>
        <div className="hidden items-cnter justify-between w-full md:flex">
          <div className="p-3 flex items-center gap-12 w-4/5">
            <div className="w-32 min-w-[128px]">
              <img src={logo} alt="logo here" className="w-full" />
            </div>
            <div className="flex items-center">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {isModalOpen === true ? (
                  <RxCross1
                    className="text-3xl menubar cursor-pointer"
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  />
                ) : (
                  <IoMenuOutline
                    className="text-3xl"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  />
                )}
              </div>
              {/* {isModalOpen && (
                  <Modal closeModal={closeModal}>
                    <Menu closeModal={closeModal} />
                  </Modal>
                )} */}
              <div className="relative">
                <p className="text-sm">Menu</p>
                {/* {isModalOpen && <Menu />} */}
                <Menu show={isModalOpen} />
              </div>
            </div>
            <div className="flex items-center bg-white h-9 w-full max-w-md px-2 rounded-md relative">
              <input
                type="text"
                onFocus={handleFocus}
                onChange={handleChange}
                value={search}
                placeholder="What are you looking for?"
                className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
              />
              <CiSearch className="text-black text-2xl" />
              {isSearchFocused && searchResult.length > 0 && (
                <div
                  data-search-content
                  className="absolute px-[1rem] pt-[.5rem] bg-black top-10 left-0 w-[100%] gap-[.5rem] pb-[10px] flex flex-col"
                >
                  {searchResult.map((item) => {
                    return (
                      <Link
                        to={`/listing?search=${search}&brand=${item.brand}&subCategory=${item.subCategory}`}
                        key={item.id}
                      >
                        <a
                          onClick={() => onClose(item)}
                          className="text-md text-[15px]  border-b border-b-[white]"
                        >
                          {item.brand + " " + item.subCategory}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-xl" />
              <p className="whitespace-nowrap text-sm">Mumbai, 400049</p>
              <IoPencil className="text-xs" />
            </div>
            <div className="text-2xl">
              <FaUser />
            </div>
            <div className="text-2xl relative cursor-pointer">
              <Link to="/cart">
                {" "}
                <FaShoppingCart />
              </Link>
              <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                0
              </p>
            </div>
          </div>
        </div>

        {/* {mobile version} */}
        <div className="md:hidden">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <IoMenuOutline className="text-3xl" />
              </div>
              <div className="w-20">
                <img src={logo} alt="logo here" className="w-full" />
              </div>
            </div>
            <div className="flex items-center gap-3 mr-2">
              <div className="text-xl">
                <FaUser />
              </div>
              <div className="text-xl relative cursor-pointer ">
                <Link to="/cart">
                  {" "}
                  <FaShoppingCart className="" />
                </Link>

                <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                  1000
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white h-7 w-full max-w-full px-2 mt-1 rounded-md relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
            />
            <CiSearch className="text-black text-2xl" />
          </div>
        </div>
      </Box>
    </header>
  );
}

export default Header;
