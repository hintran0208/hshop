import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhóm Nhạc Yêu Thích',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/f/9/6/2f96e5dbeb36dd83781d764417baa164.jpg',
    },
    {
      id: 2,
      name: "Back To 90's",
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/4/b/4/44b42aa16ce3055b45a60a681827e64e.jpg',
    },
    {
      id: 3,
      name: 'Top 100 Pop Âu Mỹ Hay Nhất',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/d/8/9/5d890d445e5ecff4d118a296440f1654.jpg',
    },
  ];
  return (
    <div>
      <h3>Có thể bạn sẽ thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
