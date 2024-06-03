import type { AppProps } from "next/app";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        transition={Flip}
        theme="dark"
      />
      <Component {...pageProps} />;
    </>
  );
}
