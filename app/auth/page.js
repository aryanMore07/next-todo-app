"use client";
import LoginComponent from "@/components/LoginComponent";
import RegisterComponent from "@/components/RegisterComponent";
import React, { useState } from "react";

function Page() {
  const [isOpen, setOpen] = useState(false);
  if (!isOpen) {
    return <LoginComponent setOpen={setOpen} />;
  } else {
    return <RegisterComponent setOpen={setOpen} />;
  }
}

export default Page;
