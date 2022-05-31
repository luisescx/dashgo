import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback } from "react";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup.string().required("Senha obrigatória"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = useCallback(
    async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
    },
    []
  );

  return (
    <>
      <Head>
        <title>Users | dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
            as="form"
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">
              Create User
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  name="name"
                  label="Nome Completo"
                  error={errors.name}
                  {...register("name")}
                />
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  error={errors.email}
                  {...register("email")}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  name="password"
                  label="Senha"
                  type="password"
                  error={errors.password}
                  {...register("password")}
                />
                <Input
                  name="password_confirmation"
                  label="Confirmação da senha"
                  type="password"
                  error={errors.password_confirmation}
                  {...register("password_confirmation")}
                />
              </SimpleGrid>
            </Stack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  colorScheme="pink"
                  type="submit"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
