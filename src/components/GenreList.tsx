import useGenre from "../hooks/useGenre";
const GenreList = () => {
  const { genres } = useGenre();
  console.log(genres);

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
