import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_happy_reviews } from "../../store/slices/productSlice";
function HappyReviews() {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector(
    (state) => state.happyReviews,
  );
  useEffect(() => {
    dispatch(fetch_happy_reviews());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="max-w-full">
      <p className="font-extrabold  m-5 text-3xl">OUR HAPPY CUSTOMERS</p>
      <div
        id="hiddenScroll"
        className="flex gap-5 m-5 flex-row overflow-x-auto"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[358px]  p-5 md:w-[400px] md:h-[240px] border rounded-lg"
          >
            <p>{"⭐".repeat(Number(review.rating))}</p>
            <p className="font-bold m-2">{review.user_name}.✅</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HappyReviews;
