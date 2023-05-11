import { PropsWithChildren } from "react"

import { Header, MainWrapper, Wrapper } from "./styled"

type AppLayoutProps = PropsWithChildren

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Wrapper>
      <Header>Demo App</Header>
      <MainWrapper>
        <div className="pageWrapper">{children}</div>
      </MainWrapper>
    </Wrapper>
  )
}

export default AppLayout
