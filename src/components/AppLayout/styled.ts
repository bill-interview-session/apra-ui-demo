'use client'

import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  padding: .5rem 1rem;
  display: flex;
  background-color: var(--color-bg-header);
  color: var(--color);
  font-weight: bolder;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  z-index: 100;

  ${mediaQuery.lessThan('medium')`
    justify-content: center;
  `}
`

export const MainWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--color-bg);

  .pageWrapper {
    padding: 1rem;
    background-color: var(--color-bg-page);
    border-radius: 4px;
  }

  ${
    mediaQuery.lessThan('medium')`
      padding-bottom: 30px;
  `}
`
