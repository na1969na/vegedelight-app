import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Typography,
  Box,
  Button,
  Divider,
  Stack,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const CustomController = ({ name, control, rules, label, type = "text" }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        fullWidth
        required={!!rules?.required}
        {...field}
        type={type}
        label={label}
        error={fieldState.invalid}
        helperText={fieldState.error?.message}
      />
    )}
  />
);

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
];

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      streetAddress: "",
      addressLine2: "",
      province: "",
      city: "",
      postalCode: "",
    },
  });

  const validationRules = {
    firstName: {
      required: "Please enter your first name.",
    },
    lastName: {
      required: "Please enter your last name.",
    },
    phoneNumber: {
      required: "Please enter your phone number.",
      minLength: { value: 10, message: "Please enter at least 10 characters." },
    },
    streetAddress: {
      required: "Please enter your address.",
    },
    city: {
      required: "Please enter your city.",
      minLength: { value: 4, message: "Please enter at least 4 characters." },
    },
    province: {
      required: "Please enter your province.",
    },
    postalCode: {
      required: "Please enter your postal code.",
      minLength: { value: 6, message: "Please enter at least 6 characters." },
    },
  };

  const onSubmit = (data) => console.log(data);

  const deliveryFee = 2;

  return (
    <Stack
      component="form"
      noValidate
      direction={"row"}
      margin={"150px auto"}
      justifyContent={"space-between"}
      width={"80%"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box width={"50%"}>
        <Typography variant="h5" fontWeight={"600"} marginBottom={"30px"}>
          Delivery Information
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 5 }}>
            <CustomController
              name="firstName"
              control={control}
              rules={validationRules.firstName}
              label="First Name"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 5 }}>
            <CustomController
              name="lastName"
              control={control}
              rules={validationRules.lastName}
              label="Last Name"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 10 }}>
            <CustomController
              name="phoneNumber"
              control={control}
              rules={validationRules.phoneNumber}
              label="Phone Number"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 10 }}>
            <CustomController
              name="streetAddress"
              control={control}
              rules={validationRules.streetAddress}
              label="Street Address"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 10 }}>
            <CustomController
              name="addressLine2"
              control={control}
              rules={validationRules.addressLine2}
              label="Address Line 2"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 5 }}>
            <CustomController
              name="city"
              control={control}
              rules={validationRules.city}
              label="City"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 5 }}>
            <FormControl fullWidth error={!!control.errors?.province}>
              <InputLabel>Province</InputLabel>
              <Controller
                name="province"
                control={control}
                rules={validationRules.province}
                render={({ field, fieldState }) => (
                  <>
                    <Select {...field} label="Province *">
                      {provinces.map((province) => (
                        <MenuItem key={province} value={province}>
                          {province}
                        </MenuItem>
                      ))}
                    </Select>
                    {fieldState?.error && (
                      <FormHelperText>
                        {fieldState?.error.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>
          </Grid>
          <Grid size={{ xs: 6, md: 5 }}>
            <CustomController
              name="postalCode"
              control={control}
              rules={validationRules.postalCode}
              label="Postal Code"
            />
          </Grid>
        </Grid>
      </Box>
      <Box width={"40%"}>
        <Typography variant="h6" fontWeight={"600"}>
        Order Summary
        </Typography>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          marginTop={"30px"}
          color="#555"
        >
          <Typography variant="h6">Subtotal</Typography>
          <Typography variant="h6">
            ${getTotalCartAmount().toFixed(2)}
          </Typography>
        </Stack>
        <Divider sx={{ marginY: "10px" }} />
        <Stack direction="row" justifyContent={"space-between"} color="#555">
          <Typography variant="h6">Delivery Fee</Typography>
          <Typography variant="h6">
            ${getTotalCartAmount() === 0 ? 0 : deliveryFee.toFixed(2)}
          </Typography>
        </Stack>
        <Divider sx={{ marginY: "10px" }} />
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">
            $
            {getTotalCartAmount() === 0
              ? 0
              : (getTotalCartAmount() + deliveryFee).toFixed(2)}
          </Typography>
        </Stack>
        <Button
          sx={{ width: "250px", marginTop: "30px" }}
          width="20px"
          variant="secondary"
          type="submit"
        >
          Place Order
        </Button>
      </Box>
    </Stack>
  );
};

export default PlaceOrder;
