import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import PhoneInput, { getCountries } from "react-phone-number-input";

import "react-phone-number-input/style.css";
import MDInput from "./MDInput";
import MDBox from "./MDBox";

const DialCodes = () => {
  const [value, setValue] = React.useState();
  const allCountries = getCountries();
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <MDBox mb={2}>
          <MDInput {...params} label="Mobile Code" />
        </MDBox>
      )}
      renderOption={(props, option) => (
        <li {...props}>
          {option ? (
            <PhoneInput
              country={option}
              value={undefined}
              disabled
              displayInitialValueAsLocalNumber
            />
          ) : null}
        </li>
      )}
      //   options={allCountries.map((country) => country.alpha2)}
      options={["US", "GB", "CA"]} // Replace with your list of country codes
      getOptionLabel={(option) => option}
    />
  );
};

export default DialCodes;
