import NextImage, { ImageProps } from 'next/image';

interface IAutoHeightImage extends Omit<ImageProps, 'width' | 'height' | 'alt'> {
  width?: number;
  alt?: string;
}

const AutoHeightImage = ({ width = 0, alt = '', ...props }: IAutoHeightImage) => (
  <NextImage
    {...props}
    alt={alt}
    width={width}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
  />
);

export default AutoHeightImage;
