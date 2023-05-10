'use client'

import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
`

export const Header = styled.div`
  width: 100%;
  padding: .5rem 1rem;
  display: flex;
  background-color: var(--color-bg-header);
  color: var(--color);
  font-weight: bolder;

  ${mediaQuery.lessThan('medium')`
    justify-content: center;
  `}
`

export const Footer = styled.div`
  width: 100%;
  padding: .5rem 1rem;
  display: flex;
  background-color: var(--color-bg);
  color: var(--color-muted);
  justify-content: center;
`

export const Main = styled.div`
  padding: 1rem 1rem 100px 1rem;
  flex: 1;
  border-radius: 4px;
  margin: 1rem 1rem 0 1rem;
  background-color: var(--color-bg-page);
`
