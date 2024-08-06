"use client";

import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { savat, share } from "@images";
import { ActionProduct, Comment, SingleSwipper } from "@/components";
import { singleProductData } from "@service";
import { Product } from "@types";
import "./style.css";

const Index = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  console.log("object, id", id)
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  interface CartProps {
    [productId: string]: Product;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await singleProductData(id);
      console.log(data)
      
    };

    fetchData();
  }, []);


  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex items-center my-6">
              <Breadcrumb
                items={[
                  {
                    href: "/",
                    title: (
                      <div className="flex items-center gap-[10px] hover:bg-none">
                        <HomeOutlined />
                        <span className="text-[#000] font-Fira Sans text-[16px] opacity-60">
                          Главная
                        </span>
                      </div>
                    ),
                  },
                  {
                    title: (
                      <a
                        href="/product"
                        className="text-[#000] font-Fira Sans text-[16px]"
                      >
                        Продукты
                      </a>
                    ),
                  },
                  {
                    title: "Гантель виниловая, 2 х 3 кг",
                  },
                ]}
              />
            </div>
            <div></div>
          </div>

          <div className=" single_product flex gap-6 max-md:grid max-md:grid-cols-1 max-md:justify-items-center ">
            <div className="my_swipper max-md:max-w-[700px] max-md:w-full">
              <SingleSwipper />
            </div>
            <div
              className="product_desc max-w-[500px] w-full bg-white pl-12 pt-12 pb-8 pr-20 rounded-[8px]
            max-md:max-w-[700px] max-md:w-full max-md:px-10
            "
            >
              <h2
                className="text-[#1F1D14] text-[32px] leading-[34px] max-w-[310px] font-Fira Sans 
              font-bold max-xs:text-[20px] "
              >
                Гантель виниловая, 2 х 3 кг
              </h2>
              <p className="text-[16px] py-4">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины.
              </p>
              <div className="text-[16px]">
                В комлекте:{" "}
                <span className="text-[#1F1D14] font-bold font-Fira Sans">
                  2 шт.
                </span>
              </div>
              <div className="text-[16px] my-4">
                Страна производства:{" "}
                <span className="text-[#1F1D14] font-bold font-Fira Sans">
                  Китай
                </span>
              </div>
              <h4 className="text-[#1F1D14] font-bold font-Fira Sans text-[24px] max-xs:text-[18px]  ">
                220 000 <span>1 шт. </span>{" "}
              </h4>
              <div className="flex items-center gap-5 my-9 max-xs:grid max-xs:grid-cols-1zxa">
                <button className="bg-[#FBD029] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear py-5 px-8 flex items-center justify-center gap-[6px]  font-Fira Sans text-[20px] text-[#1F1D14] rounded-[5px] rounded-bl-[5px]">
                  <Image src={savat} alt="korzinka_icon" />
                  Корзина
                </button>
                <button className="border-[#FBD029] border-[2px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear py-5 px-8 flex items-center justify-center gap-[6px]  font-Fira Sans text-[20px] text-[#1F1D14] rounded-[5px] rounded-bl-[5px]">
                  Сравнить
                </button>
              </div>
              <p className="flex items-center gap-[5px] mt-7 max-xs:flex max-xs:justify-end ">
                <Image src={share} alt="korzinka_icon" />
                Поделиться
              </p>
            </div>
          </div>

          <div className="flex my-20 gap-6 max-md:grid max-md:grid-cols-1 max-md:justify-items-center max-md:my-10  ">
            <div className="max-w-[608px] w-full max-md:max-w-[700px] max-md:w-full">
              <h2 className="text-[#1F1D14] text-[32px]  font-Fira Sans font-bold ">
                Описание
              </h2>
              <div
                className=" bg-white pl-[70px] pt-[40px] pb-[115px] pr-[142px] mt-[30px] rounded-[8px]
              
              max-lg:px-[50px] max-lg:py-[40px]    max-xs:px-[20px] 
              "
              >
                <h2 className="text-[#1F1D14] text-[24px] leading-[34px] max-w-[310px] font-Fira Sans font-bold max-xs:text-[20px] ">
                  Гантель виниловая, 2 х 3 кг
                </h2>
                <p className="text-[16px] mt-7 mb-[50px]">
                  В составе томатов в большом количестве содержатся сахара,
                  клетчатка, пектины, бета-каротин, витамины.
                </p>
                <div className="flex gap-[60px] mb-[30px]">
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      {" "}
                      Вес гантела:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">5kg</p>
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Цвета:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">Синий,Красный</p>
                  </div>
                </div>

                <div className="flex gap-[60px]">
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Вес гантела:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">5kg</p>
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Цвета:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">Синий,Красный</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[608px] w-full max-md:max-w-[700px] max-md:w-full">
              <h2 className="text-[#1F1D14] text-[32px]  font-Fira Sans font-bold ">
                Описание
              </h2>
              <div className=" bg-white pl-[70px] pt-[40px] pb-[115px] pr-[142px] mt-[30px] rounded-[8px]    max-lg:px-[50px]  max-lg:py-[40px]  max-xs:px-[20px] ">
                <h2 className="text-[#1F1D14] text-[24px] leading-[34px] max-w-[310px] font-Fira Sans font-bold max-xs:text-[20px] ">
                  Гантель виниловая, 2 х 3 кг
                </h2>
                <p className="text-[16px] mt-7 mb-[50px]">
                  В составе томатов в большом количестве содержатся сахара,
                  клетчатка, пектины, бета-каротин, витамины.
                </p>
                <div className="flex gap-[60px] mb-[30px]">
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      {" "}
                      Вес гантела:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">5kg</p>
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Цвета:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">Синий,Красный</p>
                  </div>
                </div>

                <div className="flex gap-[60px]">
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Вес гантела:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">5kg</p>
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#1F1D14] mb-[10px] ">
                      Цвета:
                    </h4>
                    <p className="text-[#1F1D14] text-[16px]">Синий,Красный</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[8px] w-full h-[400px] py-10 px-8">
            <h2 className="text-[#1F1D14] text-[32px]  font-Fira Sans font-bold ">
              Комментарии
            </h2>

            <Comment />
          </div>
          <div className="mb-20">
            <ActionProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
