import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { theme } from "@/utils/theme";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "E-commerce",
  description: "Made By Aryan More",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
