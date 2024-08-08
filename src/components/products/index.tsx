"use client"
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { product1, product2, product3, product4, like, savat, liked } from "@images";
import { Product } from "@types";
import { getProductsData, saveBasketProduct, saveLikeProduct } from "@service";
import { toast } from "react-toastify";
import Link from "next/link";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<{ [key: string]: boolean }>({});
  const [params, setParams] = useState({ page: 1, limit: 4 });
  const defaultImage = "https://unsplash.com/photos/250x190";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getProductsData(params);
      if (data) {
        setProducts((prevProducts) => {
          return params.page === 1 ? data : [...prevProducts, ...data];
        });
      }
      setLoading(false);
    };

    fetchData();
  }, [params]);

  const addToCart = async (item: Product) => {
    const payload = { ...item, productId: item.product_id };
    const response = await saveBasketProduct(payload.productId);
    if (response === true) {
      toast.success("Mahsulot savatga qo'shildi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addToWishlist = async (item: Product) => {
    const response = await saveLikeProduct(item.product_id);
    if (response === true) {
      setLikedProducts((prevLikedProducts) => ({
        ...prevLikedProducts,
        [item.product_id]: true,
      }));
      toast.success("Mahsulot sevimlilarga qo'shildi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleClick = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      setParams((prevParams) => ({ ...prevParams, page: newPage }));
      return newPage;
    });
  };

  return (
    <>
      <div className="container">
        <div className="py-[70px] max-lg:py-[60px] max-md:py-[50px] max-sm:py-[40px] max-xs:py-[30px]">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9 ">
            Продукты
          </h2>
          <div className="gap-6 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 max-md:block sm:grid sm:grid-cols-2 sm:mt-6 sm:justify-items-center xs:grid xs:grid-cols-2">
            {products?.map((item) => (
              <div
                className="pt-[15px] rounded-[5px] bg-white max-w-[292px]  w-full relative max-xs:max-w-[440px] max-xs:w-full max-xs:mt-5"
                key={item.product_id}
              >
                <div className="absolute top-[10px] right-[14px]">
                  <button onClick={() => addToWishlist(item)}>
                    <Image
                      src={likedProducts[item.product_id] ? liked : like}
                      alt="like"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <div className="max-xs:flex max-xs:justify-center w-full h-[200px] overflow-hidden py-5 flex justify-center">
                  <Link href={`product/${item?.product_id}`}>
                    <div className="relative w-full h-full">
                      <Image
                        objectFit="contain"
                        objectPosition="center"
                        src={item.image_url && item.image_url.length > 0 ? item.image_url[0] : defaultImage}
                        alt="product_image"
                        width={200}
                        height={180}
                      />
                    </div>
                  </Link>
                </div>

                <p className="ml-[30px] pr-5 mb-3 mt-5 text-[20px] max-sm:pr-3 font-bold h-14 max-md:text-[18px] ">
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
                <button
                  className="bg-[#FBD029] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]"
                  onClick={() => addToCart(item)}
                >
                  <span>
                    <Image src={savat} alt="korzinka_icon" />
                  </span>
                  Корзина
                </button>
              </div>
            ))}
          </div>
          <button
            className="w-full py-[15px] mt-[50px] px-10 bg-white rounded-[5px] text-[20px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear"
            onClick={handleClick}
          >
            Показать ещё 3
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Index);
