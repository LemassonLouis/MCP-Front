import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCategory = ({
  props,
  name,
  categorySelectedState,
  setCategorySelectedState,
}) => {
  const handleChange = (event) => {
    setCategorySelectedState((categorySelectedState) => [
      ...categorySelectedState,
      event.target.value,
    ]);
  };

  return (
    <FormControl name={name} sx={{ m: 1, width: 300 }} value="value">
      <InputLabel>Categorie</InputLabel>
      <Select
        onChange={handleChange}
        label="Catégorie"
        value={categorySelectedState}
        // displayEmpty
        defaultValue=""
      >
        {props.map((e) => (
          <MenuItem key={e.id} value={e.name}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
