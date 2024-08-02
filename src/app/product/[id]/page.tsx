"use client";

import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { SingleSwipper } from "@/components";
import { singleProductData } from "../../../../service/product";
import { Product } from "../../../../types/product";
import { useParams } from "react-router-dom";

const Index = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async (id: string) => {
        const data = await singleProductData(id);
        console.log("single", data);
        if (data) {
          setProduct(data);
        }
      };

      fetchData(id as string);
    }
  }, [id]);

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
          <div className="flex gap-10">
            <div>
              <SingleSwipper />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
