import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import { useRouter } from "next/router";
import LayoutManage from "@/components/manage/Layout";
import LayoutAdmin from "@/components/Admin/Layout";
import LayoutUser from "@/components/User/Layout";

export default function App(props) {
  const { Component, pageProps } = props;
  const route = useRouter().asPath.split("/")[1] || "public";

  return (
    <>
      <Head>
        <title>Eurogain Portal</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <MantineProvider
        // withGlobalStyles
        // withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: "'Inter', sans-serif",
          colorScheme: "light",
          colors: {
            brand: [
              "#E7F1F8",
              "#CFE3F1",
              "#9FC7E4",
              "#6FABD6",
              "#3F8FC9",
              "#0F73BB",
              "#0C5C96",
              "#094570",
              "#062E4B",
              "#031725",
            ],
          },
          primaryColor: "brand",
        }}
      >
        {route === "public" && <Component {...pageProps} />}
        {route === "manage" && (
          <LayoutManage>
            <Component {...pageProps} />
          </LayoutManage>
        )}
        {route === "admin" && (
          <LayoutAdmin>
            <Component {...pageProps} />
          </LayoutAdmin>
        )}
        {route === "user" && (
          <LayoutUser>
            <Component {...pageProps} />
          </LayoutUser>
        )}
      </MantineProvider>
    </>
  );
}
