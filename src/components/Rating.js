import React from "react";
import { CartState } from "../context/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, setRate, style }) => {
  const {productDispatch}=CartState();
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload:i+1
              })
            }
            style={style}
          >
            {rating > i ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </>
  );
};
export default Rating;
