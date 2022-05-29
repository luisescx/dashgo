import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Input from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <>
      <Head>
        <title>Users | dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="name" label="Nome Completo" />
                <Input name="email" label="Email" type="email" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" label="Senha" type="password" />
                <Input
                  name="password"
                  label="Confirmação da senha"
                  type="password"
                />
              </SimpleGrid>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
