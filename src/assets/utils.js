export const mapSongList = list => {
  return list.map(item => {
    return {
      id: item.id,
      name: item.get("name"),
      singerName: item.get("singer").get("name"),
      singerAvatar: item.get("singer").get("picUrl")._url,
      albumName: item.get("album").get("name"),
      albumCover: item.get("album").get("picUrl")._url,
      url: item.get("fileBatch")._url
    };
  });
};
