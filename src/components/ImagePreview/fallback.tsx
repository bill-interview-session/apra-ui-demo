'use client'

import { memo } from "react"

import { ImageWrapper } from "./styled"

type ImageFallbackProps = {
  src: string,
  fallback: string,
  width: number,
  height: number,
} & any

const ImageFallback = (props: ImageFallbackProps) => {
  const { src, fallback, ...restProps } = props

  return (
    <ImageWrapper
      {...restProps}
      src={src}
      placeholder="blur"
      blurDataURL={fallback}
      alt=""
    />
  )
}

export default memo(ImageFallback, (prevProps, nextProps) => prevProps.src === nextProps.src && prevProps.fallback === nextProps.fallback)
