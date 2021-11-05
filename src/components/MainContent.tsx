import ContentStyle from "./ContentStyle";
import episodes from "../episodes.json";
import IEpisode from "../utils/Interface";

// export default function MainContent(){
//   return <div>
//     {episodes.map((episode) => <DataFunction episodeToUse= {episode}/>)}
//   </div>;
// }

// function DataFunction(props: IEpisode): JSX.Element {
//   const episode = props.episodeToUse;
//   return <div
//     key={episode.name}>
//       <p>{episode.url} {episode.name} {episode.season} {episode.number} {episode.summary} {episode.rating}</p>
//     </div>
// }

export default function MainContent(): JSX.Element {
  return (
    <>
      {episodes.map((episode) => (
        <ContentStyle
          key={episode.id}
          image={episode.image}
          url={episode.url}
          name={episode.name}
          season={episode.season}
          number={episode.number}
          summary={episode.summary}
          rating={episode.rating}
        />
      ))}
    </>
  );
}

// export default function MainContent(episode: IEpisode): JSX.Element {
//   return (
//     <>
//     <body>
//     {episodes.map((episode, index) => {
//         return (
//         <p key={index}> url={episode.url} name={episode.name} season={episode.season} number={episode.number} summary={episode.summary} rating={episode.rating}</p>
//     )})}
//     </body>
//     </>
//   )
// }
