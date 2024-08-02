"use client";
import React, { useState } from 'react';
import { TextField } from "@mui/material";

const Index = () => {
  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, ''); 
    const formattedValue = sanitizedValue.replace(/(.{4})/g, '$1 ').trim(); 
    return formattedValue;
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-[504px] w-full rounded-[8px] bg-white px-8 pt-[45px] pb-4 shadow-lg">
        <h3 className="text-[20px] font-bold">
          С вашего карты будет списано сумма:
        </h3>
        <h4 className="text-[24px] font-bold">
          250 000 <span className="text-[16px] font-normal">uzs</span>
        </h4>
        <h3 className="text-[20px] font-bold mt-[50px] mb-4">
          Ваши карта данные
        </h3>

        <form>
          <p className="mb-2">Номер карты</p>
          <TextField
            fullWidth
            label="1234 5678 9012 3456"
            id="cardNumber"
            type="text"
            name="number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="mb-4"
            inputProps={{ maxLength: 19 }} // 16 digits + 3 spaces
          />
          <p className="mb-2">Срок карты</p>
          <TextField
            id="cardExpiry"
            label="MM/YY"
            name="expiry"
            className="mb-4"
          />
          <p className="mb-2">Код безопасности (CVV/CVC)</p>
          <TextField
            id="cardCvc"
            label="123"
            name="cvc"
            type="text"
            className="mb-4"
            inputProps={{ maxLength: 5 }}
          />
          <button className="py-[20px] w-full my-[30px] bg-[#FBD029] rounded-[5px] text-[20px] font-bold">
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
