import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
function Filters() {
  const [rate, setRate] = useState(3);
  const {
    productState: { byFastDelivery, byRating, byStock, searchquery },
    productDispatch,
  } = CartState();
  console.log(
    "productState,productDispatch",
    byFastDelivery,
    byRating,
    byStock,
    searchquery
  );
  return (
    <Fragment>
      <div className="filters">
        <span className="title">Filters</span>
        <span>
          <Form.Check
            inline
            name="group1"
            type="radio"
            id={`inline-1`}
            label="ascending"
            onClick={() =>
              productDispatch({ type: "SORT_BY_PRICE", payload: "ASCENDING" })
            }
          />
        </span>
        <span>
          <Form.Check
            inline
            name="group1"
            type="radio"
            id={`inline-2`}
            label="descending"
            onClick={() =>
              productDispatch({ type: "SORT_BY_PRICE", payload: "DESCENDING" })
            }
          />
        </span>
        <span>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
            id={`inline-3`}
            label="include out of box"
            checked={byStock}
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
          />
        </span>
        <span>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
            id={`inline-4`}
            label="Fast delivery"
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
        </span>
        <span>
          <label style={{ paddingRight: 10 }}>Rating :</label>
          <Rating
            rating={byRating}
            setRate={setRate}
            style={{ cursor: "pointer" }}
          />
        </span>
        <span>
          <Button
            onClick={() =>
              productDispatch({
                type: "CLEAR_FILTERS",
              })
            }
          >
            Clear Filters
          </Button>
        </span>
      </div>
    </Fragment>
  );
}

export default Filters;
