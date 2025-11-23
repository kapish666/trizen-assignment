import { Autocomplete, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

export default function Searchbar({ products, onSelect }) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-xs">
      <Autocomplete
        freeSolo
        open={open}
        onOpen={() => {
          if (value.length > 0) setOpen(true);
        }}
        onClose={() => setOpen(false)}
        options={products.map((p) => p.title)}
        onInputChange={(e, newValue) => {
          setValue(newValue);
          setOpen(newValue.length > 0);
        }}
        onChange={(e, selectedValue) => {
          setValue(selectedValue || "");
          setOpen(false);
          onSelect(selectedValue || "");
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "1.5rem",
            backgroundColor: "#f3f4f6",
            paddingRight: "8px",
            height: "40px",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search product"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <IoSearchOutline size={20} style={{ marginRight: 6 }} />
              ),
            }}
          />
        )}
      />
    </div>
  );
}
