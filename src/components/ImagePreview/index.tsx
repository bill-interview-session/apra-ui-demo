'use client'

import { memo, useState } from "react"

import { PreviewWrapper } from "./styled"
import ImageFallback from "./fallback"

type ImagePreviewProps = {
  thumbnailURL: string,
  imageURL: string,
  width: number,
  height: number,
}

const fallbackURL = `/assets/img/img-not-found.webp`

const ImagePreview = ({ thumbnailURL, imageURL, width, height }: ImagePreviewProps) => {
  const [showPreview, setPreview] = useState(false)

  const togglePreview = () => setPreview(!showPreview)

  return (
    <div>
      <ImageFallback src={thumbnailURL} fallback={fallbackURL} width={width} height={height} onClick={togglePreview} />
      {showPreview && (
        <PreviewWrapper>
          <div className="image-wrapper">
            <div className="icon" onClick={togglePreview}><div className="close" /></div>
            <ImageFallback src={imageURL} fallback={thumbnailURL} placeholder="blur" blurDataURL={thumbnailURL} width={0} height={0} priority />
          </div>
        </PreviewWrapper>
      )}
    </div>
  )
}

export default memo(ImagePreview, (prevProps, nextProps) => prevProps.imageURL === nextProps.imageURL && prevProps.thumbnailURL === nextProps.thumbnailURL)
