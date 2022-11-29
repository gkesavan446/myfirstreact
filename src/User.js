import { Like } from "./Like";

export function User({ movie, pic, rating, description }) {
  // console.log(props)
  // let {pic, name} = props //object destrucring
  return (
    <div className="movie-card">
      <img src={pic} alt={movie} />
      <div className="wrapper">
        <h4> {movie}</h4><h4>⭐{rating}</h4>
      </div>
      <Like />
      <p>{description}</p>
    </div>
  );
}
