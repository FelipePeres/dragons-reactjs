import React from 'react';
import styles from './FeedDragonsItem.module.css';
const dragon1 = require('../../Assets/dragon1.jpg');
const dragon2 = require('../../Assets/dragon2.jpg');
const dragon3 = require('../../Assets/dragon3.jpg');
const dragon4 = require('../../Assets/dragon4.jpg');
const imageDragons = [dragon1, dragon2, dragon3, dragon4];

// eslint-disable-next-line
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const FeedDragonsItem = ({ dragon, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(dragon);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={imageDragons.sample()} alt={dragon.name} />
      <span className={styles.visualizacao}>{dragon.name}</span>
    </li>
  );
};

export default FeedDragonsItem;
