import { Progress } from "antd";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="max-w-[375px] w-full rounded-[8px] text-center bg-white p-[20px]">
          <div>
            <Progress type="circle" percent={100} />
          </div>
          <p className="text-[#1F1D14] text-[24px] mt-[30px]  ">Успешно оплачено!</p>
          <button className="rounded-[1000px] bg-[#FBD029] py-4 px-[50px] my-[34px] text-[16px] text-[#1F1D14]">ОК</button>
        </div>
      </div>
    </>
  );
};

export default Index;
