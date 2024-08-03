import { PrismicNextImage } from '@prismicio/next';

const Gallery = ({ images }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 cursor-pointer"
          >
            <PrismicNextImage
              field={image.data.image}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
