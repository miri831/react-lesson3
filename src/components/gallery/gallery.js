export function Gallery({ photos }) {
  const currentPhoto = photos[0];
  return (
    <div>
      {/* <h2>{currentPhoto.title}</h2>
      <img
        src={currentPhoto.url}
        style={{ width: "150px" }}
        alt={currentPhoto.title}
      /> */}
      {photos.map((i) => (
        <div>
          <h2>{i.title}</h2>
          <img src={i.url} alt={i.title} style={{ width: "150px" }} />
        </div>
      ))}
    </div>
  );
}
