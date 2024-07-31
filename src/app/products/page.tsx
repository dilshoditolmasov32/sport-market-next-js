"use client";

import { useEffect, useState } from "react";
import { Select } from "antd";
import Image from "next/image";
import { Slider } from "@mui/material";
import { ActionProduct, Skeleton } from "@/components";
import { getProductsData } from "../../../service/product";
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
import Link from "next/link";

const Index = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
  });

  interface Product {
    age_max: number;
    age_min: number;
    product_id: string;
    product_name: string;
    category_id: string;
    description: string;
    made_in: string;
    color: string[];
    image_url: string[];
    size: string[];
    count: number;
    cost: number;
    discount: number;
    for_gender: string;
    liked: boolean;
    basket: boolean;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = await getProductsData(params);
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [params]);

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
              <div className="bg-white xl:w-[292px]  rounded-[8px] px-[18px] pt-[19px] pb-[38px] md:w-[260px] max-md:w-full ">
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
                className="bg-[#E4E4E4] pt-[15px] pb-[21px] w-[292px] font-Fira Sans text-[15px] rounded-[8px] hover:bg-[#F2F2F2] transition-all md:w-[260px] max-md:w-full xl:w-[292px]   "
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
              {loading ? (
                <Skeleton count={3} />
              ) : (
                <div className=" gap-6 xl:grid xl:grid-cols-3  lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 max-md:block sm:grid sm:grid-cols-2 sm:mt-6 sm:justify-items-center xs:grid xs:grid-cols-2">
                  {products?.map((item) => (
                    <div
                      className="pt-[25px] rounded-[5px] bg-white max-w-[292px] w-full
                     relative  max-xs:max-w-[440px] max-xs:w-full max-xs:mt-5 "
                      key={item.product_id}
                    >
                      <div className="absolute top-[10px] right-[14px] ">
                        <button>
                          <Image src={like} alt="like" />
                        </button>
                      </div>
                      <div className="max-xs:flex max-xs:justify-center mx-[25px] ">
                        <Link href={`product/${item.product_id}`}>
                          <Image
                            width={250}
                            height={190}
                            src={item.image_url[0]}
                            alt="product_image"
                            className="pl-[30px] pr-5"
                          />
                        </Link>
                      </div>
                      <p className="ml-[30px] pr-5 mb-3 mt-5 text-[20px] max-sm:pr-3 font-bold ">
                        {item.product_name}
                      </p>
                      <div className="flex justify-between ml-[30px] mr-6 my-3">
                        <h3 className="text-[20px]">
                          Gender: <br />
                          {item.for_gender}{" "}
                        </h3>
                        <p className="text-[20px]">
                          Country: <br /> {item.made_in}
                        </p>
                      </div>
                      <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                        {item.cost} uzs
                      </div>
                      <button className="bg-[#FBD029] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]">
                        <Image src={cart} alt="korzinka_icon" />
                        Корзина
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
