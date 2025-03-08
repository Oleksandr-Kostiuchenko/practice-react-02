import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ galleryArr }) => {
  // console.log(galleryArr);

  return (
    <Grid>
      {galleryArr.map(({ avg_color, src, alt, id }) => (
        <GridItem key={id}>
          <PhotosGalleryItem avg_color={avg_color} src={src} alt={alt} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
