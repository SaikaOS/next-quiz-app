import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

function MainButton({ name }: any) {
  return (
    <Button color="dark" radius="md">
      <Link href={`/${name}`}>
        <a style={{ textDecoration: "none", color: "white" }}>{name}</a>
      </Link>
    </Button>
  );
}

export default MainButton;
