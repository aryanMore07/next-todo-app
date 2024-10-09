"use client";
import { navbar_context } from "@/utils/textUtils";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "95%",
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
  const router = useRouter();


  const handleLogoutBtn = () => {
    // logout logic
  };

  return (
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
                if (link.name !== "Logout") {
                  router.push(link.path);
                } else {
                  handleLogoutBtn();
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </Stack>
        <Stack direction="row" alignItems="center">
          <FaUserCircle style={{ fontSize: "20px", marginRight: "8px" }} />
          <Typography>Aryan</Typography>
        </Stack>
      </InnerContainer>
    </Container>
  );
}

export default Navbar;
