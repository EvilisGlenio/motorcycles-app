import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
