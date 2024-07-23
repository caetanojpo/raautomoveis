import React, { useState } from 'react';
import { Box, IconButton, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative" width="100%" height="100%" >
      {images.length > 0 && (
        <Image
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          objectFit="contain"
          width="100%"
          height="100%"
        />
      )}
      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Previous Image"
            icon={<ArrowBackIcon />}
            position="absolute"
            top="50%"
            left="2"
            bg='primary'
            color='white'
            _hover={{bg:'secondary'}}
            transform="translateY(-50%)"
            onClick={prevImage}
          />
          <IconButton
            aria-label="Next Image"
            icon={<ArrowForwardIcon />}
            position="absolute"
            top="50%"
            right="2"
            bg='primary'
            _hover={{bg:'secondary'}}
            color='white'
            transform="translateY(-50%)"
            onClick={nextImage}
          />
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
