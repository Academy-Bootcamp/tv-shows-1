import IEpisode from "../utils/Interface.js";

export default function ContentStyle({
  image,
  name,
  url,
  season,
  number,
  summary,
}: IEpisode): JSX.Element {
  return (
    <>
      <img src={image.medium} alt="description" />
      <h1>{name}</h1>
      <a href={url}>link</a>
      <h2>
        {season} {number}
      </h2>
      <p>{summary}</p>
    </>
  );
}
