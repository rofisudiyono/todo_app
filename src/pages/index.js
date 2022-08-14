import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, Container, Snackbar, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EmptyState, IcInformation } from "../../public/images";
import { deleteActivity } from "../api/DELETE_data";
import { getAllActivity } from "../api/GET_allActivity";
import { postActivity } from "../api/POST_activity";
import ModalComponent from "./component/ModalComponent";
export default function Home() {
  const [dataActivity, setDataActivity] = useState([]);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [idActivity, setIdActivity] = useState("");

  const getAllData = async () => {
    const response = await getAllActivity();
    setDataActivity(response.data);
  };

  const postData = async () => {
    const response = await postActivity();
    if (response) {
      getAllData();
    }
  };

  const deleteData = async () => {
    const response = await deleteActivity(idActivity);
    if (response) {
      setIsShowModalDelete(false);
      setIsOpenSnackbar(true);
      getAllData();
    }
  };

  useEffect(() => {
    getAllData();
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
          <Typography style={{ fontSize: 36, fontWeight: 700 }}>
            Activity
          </Typography>
          <Button
            onClick={postData}
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
        <div style={{ width: "100%" }}>
          {!dataActivity.length && (
            <Button
              onClick={postData}
              fullWidth
              style={{ alignItems: "center", marginTop: 65 }}
            >
              <Image src={EmptyState} alt="" height={490} width={767} />
            </Button>
          )}
          <div className="w-full grid grid-cols-4 gap-4 py-[55px]">
            {dataActivity?.map((item, index) => {
              return (
                <button
                  key={index}
                  className="h-[235px] shadow-lg bg-white rounded-[12px]"
                >
                  <div className="w-full h-full flex flex-col justify-between py-[22px] px-[26px]">
                    <div className="flex">
                      <Typography style={{ fontSize: 18, fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        {format(new Date(item.created_at), "dd MMM yyyy", "id")}
                      </div>
                      <button
                        onClick={() => {
                          setIdActivity(item.id);
                          setIsShowModalDelete(true);
                        }}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
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
