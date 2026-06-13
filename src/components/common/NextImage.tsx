import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

interface IProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | StaticImport;
  alt: string;
}

export default function NextImage({ src, alt, ...rest }: IProps) {
  return <Image src={src} alt={alt} {...rest} />;
}
