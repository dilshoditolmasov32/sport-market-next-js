import { TextField } from "@mui/material"

const Index = () => {
  return (
    <div className="">
      <div className="container">
        <div className="max-w-[504px] w-full rounded-[8px] bg-white pl-10 pt-[45px] pr-[50px] pb-4  ">
          <h3 className="text-[20px] font-bold">С вашего карты будет списано сумма:</h3>
          <h4 className="text-[24px] font-bold">250 000 <span className="text-[16px] font-normal">uzs</span></h4>
          <h3 className="text-[20px] font-bold mt-[50px] mb-4">Ваши карта данные</h3>
          <p>Номер карты</p>
          <TextField fullWidth
           label="1234 5678 9012 3456"
            id="fullWidth"
            sx={{marginY:"16px"}}
            />
            <p>Срок карты</p>
          <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          sx={{marginY:"16px"}}
        />
         <button className="py-[20px] px-[162.5px] my-[30px] bg-[#FBD029] rounded-[5px] text-[20px] ">Оплатить</button>
        </div>
      </div>
    </div>
  )
}

export default Index