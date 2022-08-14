import { Add } from "@mui/icons-material";
import { Button, Container, Snackbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IcInformation } from "../../../public/images";
import ModalComponent from "../component/ModalComponent";

export default function DetailActivity() {
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  return (
    <div style={{ backgroundColor: "#E5E5E5", minHeight: "100vh" }}>
      <div className="bg-primary py-[31px]">
        <Container>
          <Typography
            style={{ fontSize: 24, fontWeight: 700, color: "white" }}
            textTransform="uppercase"
          >
            To Do List App
          </Typography>
        </Container>
      </div>
      <Container>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginTop: 43,
          }}
        >
          <Typography style={{ fontSize: 36, fontWeight: 700 }}>
            New Activity
          </Typography>
          <Button
            onClick={() => undefined}
            size="medium"
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: 45 }}
            startIcon={<Add />}
          >
            <Typography fontSize={18} textTransform="capitalize">
              Tambah
            </Typography>
          </Button>
        </div>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpenSnackbar}
        autoHideDuration={3000}
        onClose={() => setIsOpenSnackbar(false)}
        style={{ marginTop: 80 }}
      >
        <div className="bg-white shadow-md h-[58px] w-[400px] items-center rounded-[12px] flex px-[30px]">
          <div className="mr-[13px] flex items-center">
            <Image src={IcInformation} alt="" height={18} width={18} />
          </div>
          <Typography fontSize={14} fontWeight="600">
            Activity berhasil dihapus
          </Typography>
        </div>
      </Snackbar>
      <ModalComponent
        open={isShowModalDelete}
        onClose={() => setIsShowModalDelete(false)}
        onPressDelete={() => deleteData()}
        onPressCancel={() => setIsShowModalDelete(false)}
      />
    </div>
  );
}
