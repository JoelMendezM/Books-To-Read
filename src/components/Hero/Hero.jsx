import { Box, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box width="100%">
      <Image
        width={1400}
        maxH={300}
        src="/library-hero.jpg"
        alt="Library"
        objectFit="cover"
      />
    </Box>
  );
};

export default Hero;
