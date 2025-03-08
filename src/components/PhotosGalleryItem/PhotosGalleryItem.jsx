import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ avg_color, src, alt }) => {
  // console.log(elementData);

  // const { avg_color, src, alt } = elementData;
  console.log(src);

  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: avg_color,
        borderColor: avg_color,
      }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;
