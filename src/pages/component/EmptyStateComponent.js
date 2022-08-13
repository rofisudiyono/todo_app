import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { EmptyState } from "../../../public/images";

export default function EmptyStateComponent({ onClick }) {
  return (
    <Button
      onClick={onClick}
      fullWidth
      style={{ alignItems: "center", marginTop: 65 }}
    >
      <Image src={EmptyState} alt="" height={490} width={767} />
    </Button>
  );
}
