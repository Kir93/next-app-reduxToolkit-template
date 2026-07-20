import { FC, useState } from 'react';

import Image, { ImageProps } from 'next/image';

import { blurDataURL } from '@config/bigContents';

interface IProps extends ImageProps {
  fallbackSrc: string;
}

const ImageFallback: FC<IProps> = (props) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [errored, setErrored] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  // Reset the error state when src changes, during render instead of in an effect.
  if (prevSrc !== src) {
    setPrevSrc(src);
    setErrored(false);
  }

  const onError = () => setErrored(true);

  return (
    <Image
      {...{ ...rest, alt, blurDataURL, onError }}
      src={errored ? fallbackSrc : src}
      placeholder="blur"
    />
  );
};

export default ImageFallback;
