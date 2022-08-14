import { Add } from "@mui/icons-material";
import {
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IcInformation, TodoEmptyState } from "../../../public/images";
import ModalComponent from "../component/ModalComponent";
import { useRouter } from "next/router";
import { getAllActivityDetail } from "../../api/GET_allActivityDetail";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
export default function DetailActivity() {
  const router = useRouter();
  const { id } = router.query;
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [activityDetail, setActivityDetail] = useState({});
  const [editTitle, setEditTitle] = useState(false);
  console.log(editTitle);
  const [title, setTitle] = useState("");

  const getDataDetail = async () => {
    const response = await getAllActivityDetail(id);
    if (response) setActivityDetail(response);
    else return;
  };

  useEffect(() => {
    getDataDetail();
  }, []);

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
          <div className="flex">
            <button onClick={() => router.push("/")}>
              <ArrowBackIosIcon style={{ height: 32, width: 32 }} />
            </button>
            {editTitle ? (
              <TextField
                id="standard-basic"
                hiddenLabel
                variant="standard"
                size="medium"
                style={{ fontSize: 46 }}
              />
            ) : (
              <Typography
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  marginLeft: 19,
                  marginRight: 19,
                }}
              >
                {activityDetail.title}
              </Typography>
            )}

            <button onClick={() => setEditTitle(!editTitle)}>
              <EditOutlinedIcon
                style={{ height: 24, width: 24, color: "#A4A4A4" }}
              />
            </button>
          </div>
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
        <div>
          <Button
            onClick={() => undefined}
            fullWidth
            style={{ alignItems: "center", marginTop: 65 }}
          >
            <Image src={TodoEmptyState} alt="" height={413} width={541} />
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
