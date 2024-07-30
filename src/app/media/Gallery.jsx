// components/ImageSlider.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.slide', {
        xPercent: -100 * (images.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (images.length - 1),
          end: () => `+=${sliderRef.current.offsetWidth * images.length}`
        }
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <div ref={sliderRef} className="relative w-full overflow-hidden">
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="slide min-w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
