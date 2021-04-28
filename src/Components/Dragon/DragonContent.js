import React from 'react';
import styles from './DragonContent.module.css';
import { Link } from 'react-router-dom';
import DragonDelete from './DragonDelete';
const dragon1 = require('../../Assets/dragon1.jpg');
const dragon2 = require('../../Assets/dragon2.jpg');
const dragon3 = require('../../Assets/dragon3.jpg');
const dragon4 = require('../../Assets/dragon4.jpg');
const imageDragons = [dragon1, dragon2, dragon3, dragon4];
// eslint-disable-next-line
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const DragonContent = ({ data }) => {
  const { id, createdAt, name, type } = data;
  return (
    <div className={styles.dragon}>
      <div className={styles.img}>
        <img src={imageDragons.sample()} alt={name} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.actions}>
            <DragonDelete id={id} />
            <Link to={`/conta/editar/${id}`} className={styles.buttonUpdate}>
              Editar
            </Link>
          </p>
          <h1 className="title">
            <Link to="#">{name}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{type} </li>
            <li style={{ fontSize: 9.1 }}>{createdAt} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DragonContent;
