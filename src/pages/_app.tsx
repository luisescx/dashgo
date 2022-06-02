import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Contexts from "../contexts";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Contexts>
          <Component {...pageProps} />
        </Contexts>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
