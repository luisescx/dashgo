import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Head from "next/head";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const OPTIONS = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTick: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-05-28T00:00:00.000Z",
      "2022-05-29T00:00:00.000Z",
      "2022-05-30T00:00:00.000Z",
      "2022-05-31T00:00:00.000Z",
      "2022-06-01T00:00:00.000Z",
      "2022-06-02T00:00:00.000Z",
      "2022-06-03T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as ApexOptions;

const SERIES = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | dashgo</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>

              <Chart
                options={OPTIONS}
                series={SERIES}
                type="area"
                height={160}
              />
            </Box>

            <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>

              <Chart
                options={OPTIONS}
                series={SERIES}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
