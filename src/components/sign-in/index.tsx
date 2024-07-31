"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { styled } from '@mui/system';
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "@/utils/validation";
import { IAuth } from "../../../types/auth";

const style = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #F8B400",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#F8B400', 
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F8B400',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FBD029', 
    },
    '&:hover fieldset': {
      borderColor: '#FBD029', 
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F8B400', 
    },
  },
});

interface SignInProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const initialValues: IAuth = {
  email: "",
  password: "",
};

const SignInModal: React.FC<SignInProps> = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: unknown) => {
    console.log(values);
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Stack spacing={3}>
                <h3 className="text-center text-[24px] mb-5 font-bold font-Fira Sans">
                  Login orqali kirish
                </h3>
                <Field
                  name="email"
                  type="email"
                  label="Elektron pochta manzilingiz"
                  as={CustomTextField}
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />

                <Field
                  name="password"
                  label="Parol"
                  as={CustomTextField}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
              </Stack>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  paddingY: "10px",
                  bgcolor: "#FBD029",
                  "&:hover": {
                    bgcolor: "#F8B400",
                  },
                  fontSize: "20px",
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
