export default function About(props) {
  //For props, I'm expecting
  //- title
  //- year
  return (
    <p>{props.event} ({props.year})</p>
  );
}