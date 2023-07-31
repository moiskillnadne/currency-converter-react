import { Box, Dialog, DialogTitle } from "@mui/material";

export const ModalBase = (props) => {
  const { onClose, isOpen, children, title } = props;

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      
      <Box>{children}</Box>
    </Dialog>
  )
}