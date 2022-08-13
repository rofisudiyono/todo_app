import { Add } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { EmptyState } from "../../public/images";
import { getAllActivity } from "../api/GET_allActivity";
import { postActivity } from "../api/POST_activity";

export default function Home() {
  const getAllData = async () => {
    const response = await getAllActivity();
    console.log("response", response);
  };

  const postData = async () => {
    const response = await postActivity();
    console.log(response);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#16ABF8" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TO DO LIST APP
          </Typography>
        </Toolbar>
      </AppBar>
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
            <Typography fontSize={18}>Tambah</Typography>
          </Button>
        </div>
        <div style={{ width: "100%" }}>
          <Button
            onClick={postData}
            fullWidth
            style={{ alignItems: "center", marginTop: 65 }}
          >
            <Image src={EmptyState} alt="" height={490} width={767} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
