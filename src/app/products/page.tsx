"use client";

import { useState } from "react";
import { Select } from "antd";
import { ActionProduct } from "@/components";
import {
  board,
  cart,
  like,
  list,
  product1,
  product2,
  product3,
  product4,
} from "@images";
import Image from "next/image";
import { Slider } from "@mui/material";

const Index = () => {
  const products = [
    {
      id: "1",
      image: product1,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "2",
      image: product2,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "3",
      image: product3,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "4",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "5",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "6",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "7",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "8",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "9",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
  ];

  const data = {
    option1: ["Сортировать", "Option-2", "Option-3"],
    option2: ["Все продукты", "Option-2", "Option-3"],
  };

  type CityName = keyof typeof data;
  const provinceData: CityName[] = ["option1", "option2"];

  const [cities, setCities] = useState(data[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(
    data[provinceData[0]][0] as CityName
  );

  const handleProvinceChange = (value: CityName) => {
    setCities(data[value]);
    setSecondCity(data[value][0] as CityName);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };

  const [value, setValue] = useState<number[]>([10, 40]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue);
    setValue(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }
  return (
    <>
      <div className="pt-5">
        <div className="container">
          <div className="flex gap-6 md:gap-4  max-md:grid max-md:grid-cols-1">
            <div>
              <div className="bg-white w-[292px]  rounded-[8px] px-[18px] pt-[19px] pb-[38px] md:w-[260px] max-md:w-full ">
                <h5 className="text-[16px] font-Fira Sans text-[#000]">
                  Филтрь
                </h5>
                <form>
                  <label
                    htmlFor="Цена"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Цена
                  </label>
                  <div className="bg-[#F2F2F2] mt-[10px] py-[12px] px-5 rounded-[5px] mb-[16px]">
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      sx={{ color: "#FBD029", height: "4px" }}
                      getAriaValueText={valuetext}
                    />

                    <div className="flex text-[000000] gap-16 font-bold text-[14px]">
                      <span>3 000 uzs</span>
                      <span>40 000 uzs</span>
                    </div>
                  </div>
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Артикул:
                  </label>
                  <br />

                  <input
                    type="text"
                    className=" bg-[#f2f2f2] rounded-[5px] px-[18px] py-[10px] outline-none text-[16px] text-[#000] w-full mt-[10px] mb-4 "
                    placeholder="аф566"
                  />

                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Выберите категорию:
                  </label>
                  <br />
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px]  mt-[10px] mb-4 "
                  >
                    <option value="1">Bce</option>
                    <option value="2">option-1</option>
                    <option value="3">option-2</option>
                  </select>
                  <br />
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Новинка:
                  </label>
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px]  mt-[10px] mb-4 "
                  >
                    <option value="1">Bce</option>
                    <option value="2">option-1</option>
                    <option value="3">option-2</option>
                  </select>
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Акция:
                  </label>
                  <br />
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px]  mt-[10px] mb-4  "
                  >
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans"
                      value="1"
                    >
                      Bce
                    </option>
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans"
                      value="2"
                    >
                      option-1
                    </option>
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans px-5"
                      value="3"
                    >
                      option-2
                    </option>
                  </select>
                </form>
              </div>
              <button
                type="submit"
                className="bg-[#E4E4E4] pt-[15px] pb-[21px] w-[292px] font-Fira Sans text-[15px] rounded-[8px] hover:bg-[#F2F2F2] transition-all md:w-[260px] max-md:w-full    "
              >
                Показать результат
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center mb-[10px] max-xs:block ">
                <div className="flex gap-[25px] max-xs:w-full max-xs:flex max-xs:justify-between max-xs:mb-5">
                  <Select
                    style={{ width: 120 }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                  <Select
                    style={{ width: 120 }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                </div>

                <div className="flex gap-[8px]  max-xs:w-full max-xs:flex max-xs:justify-between">
                  <button className="flex justify-between items-center gap-[10px] rounded-[5px] bg-white py-[7px] px-[15px] ">
                    <Image src={board} alt="board" />
                    Кард
                  </button>
                  <button className="flex justify-between items-center gap-[10px]  ">
                    <Image src={list} alt="list" />
                    Лист
                  </button>
                </div>
              </div>
              <div className=" gap-6 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 max-md:block sm:grid sm:grid-cols-2 sm:mt-6 sm:justify-items-center xs:grid xs:grid-cols-2">
                {products?.map((item, index) => (
                  <div
                    className="pt-[25px] rounded-[5px] bg-white max-w-[292px] w-full
                     relative  max-xs:max-w-[440px] max-xs:w-full max-xs:mt-5 "
                    key={index}
                  >
                    <div className="absolute top-[10px] right-[14px] ">
                      <button>
                        <Image src={like} alt="like" />
                      </button>
                    </div>
                    <div className="max-xs:flex max-xs:justify-center">
                      <Image
                        src={item.image}
                        alt="product_image"
                        className="pl-[30px] pr-5 max-xs:w-[250px] "
                      />
                    </div>
                    <p className="pl-[30px] pr-5 mb-6 mt-5 text-[20px] max-sm:pr-3">
                      {item.name}
                    </p>
                    <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                      {item.price}
                    </div>
                    <button className="bg-[#FBD029] w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]">
                      <Image src={cart} alt="korzinka_icon" />
                      Корзина
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full py-[15px] mt-[50px] px-10 bg-white rounded-[5px] text-[20px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear  ">
                Показать ещё
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 max-xs:my-5 max-sm:my-14">
        <ActionProduct />
      </div>
    </>
  );
};

export default Index;
