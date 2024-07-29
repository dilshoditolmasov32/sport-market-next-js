import { TextField } from "@mui/material";

const Index = () => {
  return (
    <div className="">
      <div className="container">
        <div className="max-w-[504px] w-full rounded-[8px] bg-white pl-10 pt-[45px] pr-[50px] pb-4  ">
          <h3 className="text-[20px] text-center ">
            Введите код отправленный на <br /> номер
            <span className="font-bold"> +998 99 9** **56</span>
          </h3>
          <div className="flex gap-4 justify-center my-[30px]">
            <div className="rounded-[5px] bg-[#f2f2f2] w-[60px]  pb-[15px] pt-[15px] px-[12px] relative">
              <input
                type="text"
                className="outline-none w-full h-[30px] bg-[#F2F2F2] text-[20px]  "
              />
              <p className="absolute mb-4 w-9 bg-black  opacity-70 h-[2px] "></p>
            </div>
            <div className="rounded-[5px] bg-[#f2f2f2] w-[60px]  pb-[15px] pt-[15px] px-[12px] relative">
              <input
                type="text"
                className="outline-none w-full h-[30px] bg-[#F2F2F2] text-[20px]  "
              />
              <p className="absolute mb-4 w-9 bg-black  opacity-70 h-[2px] "></p>
            </div>
            <div className="rounded-[5px] bg-[#f2f2f2] w-[60px]  pb-[15px] pt-[15px] px-[12px] relative">
              <input
                type="text"
                className="outline-none w-full h-[30px] bg-[#F2F2F2] text-[20px]  "
              />
              <p className="absolute mb-4 w-9 bg-black  opacity-70 h-[2px] "></p>
            </div>
            <div className="rounded-[5px] bg-[#f2f2f2] w-[60px]  pb-[15px] pt-[15px] px-[12px] relative">
              <input
                type="text"
                className="outline-none w-full h-[30px] bg-[#F2F2F2] text-[20px]  "
              />
              <p className="absolute mb-4 w-9 bg-black  opacity-70 h-[2px] "></p>
            </div>
          </div>
          <p className="text-[#FBD029] text-center my-2">Не полусили код ?</p>

          <button className="py-[20px] px-[162.5px] my-[60px] bg-[#FBD029] rounded-[5px] text-[20px] ">
            Подвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
