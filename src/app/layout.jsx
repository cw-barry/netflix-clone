import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Netflix | Home",
    template:"Netflix | %s"
  },
  description: "A movie platform to stream on demand movies",
  keywords:"movies, netflix, latest-movies, action, horroe"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
          {children}

          <ToastContainer/>
        </AuthProvider>
        </body>
    </html>
  );
}
