import Image from 'next/image'
import styled from 'styled-components'
import mediaQuery from 'styled-media-query'

export const ImageWrapper = styled(Image)`
  cursor: pointer;
`

export const PreviewWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  .image-wrapper {
    position: absolute;
    transition: all 1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;

    img {
      max-width: 80%;
      max-height: 80%;
      vertical-align: middle;
      user-select: none;
      pointer-events: auto;
      width: 600px;
      height: auto;
      min-height: 600px;
      background-color: var(--color-muted);
      transition: all 1s ease-in-out;
      cursor: default;
    }

    .icon {
      display: flex;
      justify-content: flex-end;
      max-width: 80%;
      width: 600px;

      .close {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.2);
        color: var(--color-bg);
        transition: all .3s cubic-bezier(.215,.61,.355,1) 0s;

        &:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.5);
          color: var(--color-bg-page);
        }

        &::after {
          content: 'x';
          font-size: 20px;
        }
      }
    }

    ${mediaQuery.lessThan('medium')`
      flex-direction: column-reverse;

      .icon {
        justify-content: center;
      }
    `}
  }
`
