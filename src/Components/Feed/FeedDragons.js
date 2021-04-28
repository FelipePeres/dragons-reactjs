import React from 'react';
import FeedDragonsItem from './FeedDragonsItem';
import useFetch from '../../Hooks/useFetch';
import { DRAGONS_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedDragons.module.css';

const FeedDragons = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchDragons() {
      const { url, options } = DRAGONS_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchDragons();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    data.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((dragon) => (
          <FeedDragonsItem
            key={dragon.id}
            dragon={dragon}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedDragons;
