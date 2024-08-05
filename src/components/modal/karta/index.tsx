"use client";
import React, { useState } from "react";
import { Modal, TextField } from "@mui/material";
import { MessageModal } from "@/components";

interface KartaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Index: React.FC<KartaModalProps> = ({ open, setOpen }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [visible, setVisible] = useState(false);

  const formatCardNumber = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, "");
    const formattedValue = sanitizedValue.replace(/(.{4})/g, "$1 ").trim();
    return formattedValue;
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
  };

  const handleClick = () => {
    setVisible(open);
  };

  return (
    <>
      <MessageModal visible={visible} onClose={() => setVisible(false)} />
      <div className="flex justify-center items-center">
        <Modal open={open} onClose={() => setOpen(false)}>
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
                  inputProps={{ maxLength: 19 }}
                />
                <p className="mb-2">Срок карты</p>
                <TextField
                  id="cardExpiry"
                  label="MM/YY"
                  name="expiry"
                  className="mb-4"
                />

                <button
                  className="py-[20px] w-full my-[30px] bg-[#FBD029] rounded-[5px] text-[20px] font-bold"
                  onClick={handleClick}
                  type="button"
                >
                  Оплатить
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Index;
