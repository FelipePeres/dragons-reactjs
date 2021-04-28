import React from 'react';
import FeedModal from './FeedModal';
import FeedDragons from './FeedDragons';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedDragons setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
