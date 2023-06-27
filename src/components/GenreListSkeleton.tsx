import { Box, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Box margin="30px 0">
      <SkeletonCircle size="5" />
    </Box>
  );
};

export default GenreListSkeleton;
