import IEpisode from '../utils/Interface.js'
  
  export default function ContentStyle(props: IEpisode): JSX.Element {
    return (
      <div>
        <img alt= "Image description" />
        <h1>{props.name}</h1>
        <a href={props.url}>link</a>
        <h2>{props.season} {props.number}</h2>
        <p>{props.summary}</p>
        <p>{props.rating}</p>
      </div>
    );
  }

