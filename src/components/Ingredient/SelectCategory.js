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
  console.log(props);

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
        {props ? props.map((e) => (
          <MenuItem key={e.id} value={e}>
            {e.name}
          </MenuItem>
        )) : console.log("aucunes categories détécté")}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;


// const SelectCategory = ({
//   props,
//   name,
//   categorySelectedState,
//   setCategorySelectedState,
// }) => {
//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setCategorySelectedState(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   // const handleChange = (event) => {
//   //   setCategorySelectedState((categorySelectedState) => [
//   //     ...categorySelectedState,
//   //     event.target.value,
//   //   ]);
//   // };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 500, maxWidth: "100%" }}>
//         <InputLabel id="demo-multiple-name-label" fullWidth>
//           Name
//         </InputLabel>
//         <Select
//           labelId={name}
//           id={name}
//           multiple
//           value={categorySelectedState}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//         >
//           {props.map((name) => (
//             <MenuItem key={name} value={name}>
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//     // <FormControl name={name} sx={{ m: 1, width: 300 }} value="value">
//     //   <InputLabel>Categorie</InputLabel>
//     //   <Select
//     //     onChange={handleChange}
//     //     label="Catégorie"
//     //     value={categorySelectedState}
//     //     // displayEmpty
//     //     defaultValue=""
//     //   >
//     //     {props.map((e) => (
//     //       <MenuItem key={e.name} value={e.name}>
//     //         {e.name}
//     //       </MenuItem>
//     //     ))}
//     //   </Select>
//     // </FormControl>
//   );
// };