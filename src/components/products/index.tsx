import Image from "next/image";
import { product1, product2, product3, product4, like, savat } from "@images";

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
  ];
  return (
    <>
      <div className="container">
        <div className="py-[70px] max-lg:py-[60px] max-md:py-[50px] max-sm:py-[40px] max-xs:py-[30px]">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9">
            Продукты
          </h2>
          <div className="flex gap-6 max-lg:grid max-lg:grid-cols-3 max-md:grid max-md:grid-cols-2 max-md:justify-items-center   max-xs:grid  max-xs:grid-cols-1 max-xs:justify-items-center">
            {products?.map((item, index) => (
              <div
                className="pt-[25px] rounded-[5px] bg-white w-[292px] relative max-lg:max-w-[290px] max-lg:w-full max-xs:max-w-[420px] max-xs:w-full group"
                key={index}
              >
                <div className="absolute top-[10px] right-[14px]">
                  <button>
                    <Image src={like} alt="like" className="max-xs:w-[24px]" />
                  </button>
                </div>
              <div className="max-sm:flex max-sm:justify-center overflow-hidden">
              <Image
                  src={item.image}
                  alt="product_image"
                  className="pl-[30px] pr-5 max-xs:w-[220px] transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
                <p className="pl-[30px] pr-5 mb-6 mt-5 text-[20px] max-sm:p-4 max-sm:mb-4">
                  {item.name}
                </p>
                <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold max-sm:mb-4">
                  {item.price}
                </div>
                <button className="bg-[#FBD029] w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear">
                  <Image src={savat} alt="korzinka_icon" />
                  Корзина
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-[15px] px-10 mt-[50px] bg-white rounded-[5px] text-[20px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear  ">
          Показать ещё 4
        </button>
        </div>
       
      </div>
    </>
  );
};

export default Index;
