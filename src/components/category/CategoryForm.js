import { IconButton, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { createCategory } from "../../services/CategoryService";

const CategoryForm = ({ onClick }) => {
  // const [form] = Form.useForm();
  const [categoryState, setCategoryState] = useState("");

  // const [form] = form();

  // const reset = useCallback(() => {
  //   form.resetFields();
  // }, [form]);

  const handleFormFinish = useCallback(
    async (e) => {
      try {
        const newCategory = {
          name: categoryState,
          isArchive: false,
        };
        console.log(newCategory);
        console.log("ici");
        await createCategory(newCategory);

        if (onClick) {
          // form.resetFields();
          console.log("la");
          onClick();
        }

        // reset();
      } catch (err) {
        console.log(err);
      }
    },
    [categoryState, onClick]
  );

  // useEffect(() => {
  //   reset();
  // }, [reset]);

  return (
    <div>
      <Typography>{categoryState}</Typography>
      <form name="form" onSubmit={handleFormFinish}>
        <TextField
          label="Catégorie"
          variant="outlined"
          value={categoryState}
          onChange={(e) => setCategoryState(e.target.value)}
        ></TextField>
        <div>
          <IconButton type="submit" variant="contained" color="primary">
            Créer
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
