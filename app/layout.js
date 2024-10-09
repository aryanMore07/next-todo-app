import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { theme } from "@/utils/theme";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "E-commerce",
  description: "Made By Aryan More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
