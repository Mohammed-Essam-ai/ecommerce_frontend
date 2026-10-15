import { useSelector, useDispatch } from "react-redux";
import { fetch_reviews } from "../../store/slices/productSlice";
import { useEffect } from "react";
function Reviews({ id }) {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(fetch_reviews({ id }));
  }, [dispatch, id]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="flex gap-5 m-3 flex-row">
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
  );
}

export default Reviews;
