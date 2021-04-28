import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import UserDragonPost from './UserDragonPost';
import UserDragonUpdate from './UserDragonUpdate';
import UserStats from './UserStats';
import Feed from '../Feed/Feed';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserDragonPost />} />
        <Route path="editar/:id" element={<UserDragonUpdate />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
