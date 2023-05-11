import { PropsWithChildren } from "react"

import { Footer, Header, Main, Wrapper } from "./styled"

type AppLayoutProps = PropsWithChildren

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Wrapper>
      <Header>Demo App</Header>
      <Main>{children}</Main>
      <Footer>© 2023</Footer>
    </Wrapper>
  )
}

export default AppLayout
