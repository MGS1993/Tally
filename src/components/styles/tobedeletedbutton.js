import { styled, Fab } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CustomizedFab = styled(Fab)`
  color: red;
  background-color: white;
`;

const DeleteButton = ({ onClick }) => {
  return (
    <CustomizedFab onClick={onClick}>
      <DeleteOutlineIcon />
    </CustomizedFab>
  );
};

export default DeleteButton;
