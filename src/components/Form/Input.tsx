import {
  FormControl,
  FormLabel,
  Input as ChackaInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

      <ChackaInput
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
