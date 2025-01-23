import StarRatings from "react-star-ratings";

function StarRating({ rating }) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="blue"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="1px"
      name="rating"
    />
  );
}

export default StarRating;
