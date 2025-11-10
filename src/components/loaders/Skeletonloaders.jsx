import { Card, CardContent, Box, Skeleton } from '@mui/material';

const ProductSkeleton = () => (
  <Card sx={{ width: 300, m: 2 }}>
    <Skeleton variant="rectangular" height={180} />
    <CardContent>
      <Skeleton variant="text" width="80%" height={30} />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="60%" />
      <Box display="flex" alignItems="center" mb={2}>
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="rectangular" width={50} height={30} sx={{ mx: 1 }} />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>
      <Skeleton variant="rectangular" height={40} />
    </CardContent>
  </Card>
);

const Skeletonloader = ({ count = 8 }) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center">
    {Array.from(new Array(count)).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </Box>
);

export default Skeletonloader;
