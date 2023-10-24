import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container } from "./styles";

export function SearchBar({ className, ...rest }) {
  return (
    <Container className={className}>
      <MagnifyingGlass />
      <input
        {...rest}
      />
    </Container>
  );
}
