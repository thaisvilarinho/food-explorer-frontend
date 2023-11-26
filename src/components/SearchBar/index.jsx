import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container, Content } from "./styles";

export function SearchBar({ className,insideMenu=false, ...rest }) {
  return (
    <Container className={className}>
      <Content data-inside-menu={insideMenu}>
        <MagnifyingGlass />
      </Content>
        <input
          {...rest}
        />

    </Container>
  );
}
