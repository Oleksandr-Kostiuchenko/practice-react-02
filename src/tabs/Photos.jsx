import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGalleryItem from '../components/PhotosGalleryItem/PhotosGalleryItem';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { getPhotos } from '../apiService/photos';
import Button from '../components/Button/Button';

import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';

const Photos = () => {
  const [userQuery, setUserQuery] = useState();
  const [photosArr, setPhotosArr] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    if (!userQuery) {
      return;
    }

    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const data = await getPhotos(userQuery, page);

        if (!data.photos.length) {
          setIsEmpty(true);
          return;
        }

        setPhotosArr(prevPhotos => [...prevPhotos, ...data.photos]);

        setIsVisible(page < Math.ceil(data.total_results / data.per_page));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [userQuery, page]);

  const onFormSubmit = value => {
    if (value.trim() === '') {
      alert('Cant be empty!');
      return;
    }
    setUserQuery(value);
  };

  const onLoadBtnClick = () => {
    setPage(page + 1);
    fetchPhotos();
  };

  return (
    <>
      <Form onFormSubmit={onFormSubmit} />
      {/* {photosArr.length > 0 && <PhotosGallery galleryArr={photosArr} />} */}
      {isLoading && <Loader />}
      {error && <Text textAlign="center">Something went wrong!</Text>}
      {error && !isEmpty && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {isEmpty && <Text textAlign="center">Nothing is found</Text>}
      {photosArr.length > 0 && <PhotosGallery galleryArr={photosArr} />}
      {isVisible && <Button onClick={onLoadBtnClick}>Load more</Button>}
    </>
  );
};

export default Photos;
