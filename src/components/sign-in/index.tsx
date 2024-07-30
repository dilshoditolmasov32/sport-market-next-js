"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #F8B400',
  boxShadow: 24,
  borderRadius:4,
  p: 4,
};

interface SignInProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SignInModal: React.FC<SignInProps>=({open, setOpen}) =>{



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={ () => setOpen(false)}
        
      >
        <Box sx={style}>
        <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <h3 className='text-center text-[24px] mb-4 font-bold font-Fira Sans'>Login orqali kirish</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{borderColor:"#F8B400"}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, paddingY:"10px", bgcolor:"#FBD029", '&:hover': {
                  bgcolor: "#F8B400", 
                }, 
                fontSize:"20px",
                textTransform:"capitalize"
              }}
              >
                Login
              </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default SignInModal;