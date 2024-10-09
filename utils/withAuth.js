"use client"
import { redirect } from "next/navigation";
import React from "react";

const withAuth = (WrappedComponent) => {
  return function withAuth(props) {
    const user_details = localStorage.getItem("user_details");
    if (!user_details || !Object.keys(user_details).length === 0) {
      redirect("/auth");
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
