import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    const loadImage = () => {
      setImageSrc(src);
      observer.unobserve(imageRef);
    };

    if (imageRef && imageSrc === null) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // When image is visible in the viewport, set the src attribute to load the image
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                loadImage();
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers that do not support IntersectionObserver
        loadImage();
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return <img ref={(element) => setImageRef(element)} src={imageSrc} alt={alt} {...rest} />;
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
