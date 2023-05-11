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
  const { src, fallback } = props

  return (
    <ImageWrapper {...props}
      src={src}
      placeholder="blur"
      blurDataURL={fallback}
    />
  )
}

export default memo(ImageFallback, (prevProps, nextProps) => prevProps.src === nextProps.src)
