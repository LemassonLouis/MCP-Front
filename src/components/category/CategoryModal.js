import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const CategoryModal = () => {
  const [openState, setOpenState] = useState(true);

  const handleClose = () => {
    setOpenState(false);
  };
  return (
    <div>
      <Modal
        open={openState}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <h2 id="parent-modal-title">Création d'une nouvelle recette</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryModal;
