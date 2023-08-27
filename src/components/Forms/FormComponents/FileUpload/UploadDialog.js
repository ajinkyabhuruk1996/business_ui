import React, { useState } from "react";
// import RaisedButton from '@mui/material/RaisedButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UploadForm from './UploadForm.js'
import UploadFileFuncCom from './UploadFileFuncCom.js'

export default function UploadDialog(props) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  const [imageToResize, setImageToResize] = useState(undefined);
  const [resizedImage, setResizedImage] = useState(undefined);
  const [imageToResizeString, setImageToResizeString] = useState(undefined);

  const { handleClose, handleClickOpen, handleOkUploadPhoto,  dialogueOpen, dialogueTitle } = props;


  const handleSubmit = () => {
    handleOkUploadPhoto( { orginalImgSrc: imageToResize, resizedImgSrc: resizedImage, imageToResizeString });
    handleClose();
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={dialogueOpen}
        onClose={handleClose}
        actions={[
          <Button type="submit" form="my-form-id" label="Submit" />
        ]}
      >
        <DialogTitle>{dialogueTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upload clear picture with valid format.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
          {/* <UploadForm /> */}
          <UploadFileFuncCom 
            imageToResize={imageToResize}
            resizedImage={resizedImage}
            setImageToResize={setImageToResize}
            setResizedImage={setResizedImage}
            setImageToResizeString={setImageToResizeString}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}
