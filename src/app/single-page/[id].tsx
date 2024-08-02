"use client";

import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { SingleSwipper } from "@/components";
import { useRouter } from "next/router";
import { singleProductData } from "../../../service/product";
import { Product } from "../../../types/product";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    const fetchData = async (id: string) => {
      const data = await singleProductData(id);
      if (data) {
        setProduct(data);
      }
    };

    if (id) {
      fetchData(id as string);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-[40px]">Single User: {id}</h1>
      <div>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex items-center my-6">
              <Breadcrumb
                items={[
                  {
                    href: "/",
                    title: (
                      <div className="flex items-center gap-[10px]  hover:bg-none">
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
                        href="/products"
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
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              harum tempora cum autem minima at saepe id repellendus ullam,
              deleniti quis iure. Rerum explicabo sit voluptas, accusamus magnam
              aspernatur commodi?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
