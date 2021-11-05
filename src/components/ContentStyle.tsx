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
      <img src={image.medium} alt="" />
    </>
  );
}
