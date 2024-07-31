import Image from "next/image";
import { shopping_bag } from "@images";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="h-[60vh] flex justify-center items-center ">
        <div className="container">
          <div className="text-center">
            <div className="flex justify-center ">
              <Image
                width={100}
                height={100}
                src={shopping_bag}
                alt="shop_bag"
                className="bg-[#F2F2F2] mb-6"
              />
            </div>
            <h2 className="font-bold text-[24px]">Sevimlilar roʻyxati boʻsh</h2>
            <div className="flex justify-center my-4">
              <p className="max-w-[500px] w-full flex justify-center">
                Ma'qul kelgan maxsulotlarni keyinroq ko'rish yoki harid qilish
                uchun sevimlilar ro'yxatiga kiriting.
              </p>
            </div>
            <Link href={"/"}>
              <button className="border-[#FBD029] border-[2px] text-[18px] rounded-[8px]  py-3 px-4 ">
                Asosiy sahifaga o'tish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
