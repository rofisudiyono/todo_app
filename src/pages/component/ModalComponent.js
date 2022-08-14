import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { IcWarning } from "../../../public/images";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export default function ModalComponent({
  open,
  onClose,
  onPressCancel,
  onPressDelete,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="bg-white h-[355px] w-[490px] shadow-lg rounded-[12px] flex flex-col justify-center items-center">
          <Image src={IcWarning} alt="" height={60} width={60} />
          <div className="mt-[50px] flex flex-col items-center">
            <Typography style={{ fontSize: 18 }}>
              Apkah Anda Yakin akan menghapus activity
            </Typography>
            <Typography
              style={{ fontSize: 18, fontWeight: "bold" }}
            >{`"Meeting dengan Client"?`}</Typography>
          </div>
          <div className="mt-[48px] flex w-full justify-center">
            <Button
              onClick={onPressCancel}
              variant="contained"
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: 45,
                width: 150,
                height: 54,
                color: "black",
              }}
            >
              Batal
            </Button>
            <Button
              onClick={onPressDelete}
              variant="contained"
              style={{
                backgroundColor: "red",
                borderRadius: 45,
                width: 150,
                height: 54,
                background: "#ED4C5C",
                marginLeft: 20,
              }}
            >
              Hapus
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
