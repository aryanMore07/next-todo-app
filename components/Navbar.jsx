"use client";
import { navbar_context } from "@/utils/textUtils";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LogoutConfimationDialog from "./LogoutConfimationDialog";
import UserDetailsModel from "./UserDetailsModel";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "55px",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Heading = styled(Box)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  cursor: "pointer",
}));

const Link = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "28px",
  color: theme.palette.secondary.main,
  fontWeight: 400,
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    color: "#ff3b30",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openLogoutConfirmationDialog, setOpenLogoutConfirmationDialog] =
    useState(false);
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();
  const pathName = usePathname();

  const handleOpen = () => setOpen(true);

  const handleLogoutBtn = () => {
    setOpenLogoutConfirmationDialog(true);
  };

  useEffect(() => {
    const user = localStorage.getItem("user_details");
    if (user) {
      setUserDetails(JSON.parse(user));
    }
  }, [pathName]);

  return (
    <>
      <LogoutConfimationDialog
        open={openLogoutConfirmationDialog}
        setOpen={setOpenLogoutConfirmationDialog}
        setUserDetails={setUserDetails}
      />
      <UserDetailsModel
        open={open}
        setOpen={setOpen}
        userDetails={userDetails}
      />
      <Container>
        <InnerContainer>
          <Heading
            onClick={() => {
              router.push("/");
            }}
          >
            Shoppie
          </Heading>
          <Stack direction="row" spacing={3}>
            {navbar_context.nav_links.map((link) => (
              <Link
                key={link._id}
                onClick={() => {
                  router.push(link.path);
                }}
              >
                {link.name}
              </Link>
            ))}
            {Object.keys(userDetails).length > 0 && (
              <Link
                onClick={() => {
                  handleLogoutBtn();
                }}
              >
                Logout
              </Link>
            )}
          </Stack>
          <span>
            {Object.keys(userDetails).length > 0 && (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                <FaUserCircle
                  style={{ fontSize: "20px", marginRight: "8px" }}
                />
                <Typography>{userDetails.name}</Typography>
              </Stack>
            )}
          </span>
        </InnerContainer>
      </Container>
    </>
  );
}

export default Navbar;
