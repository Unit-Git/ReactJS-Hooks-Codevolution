import React, { useEffect, useReducer } from "react";
import Axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something Wrong!",
      };
    default:
      return state;
  }
};

function ReducerApi2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
          console.log(res);
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch(err => {
          dispatch({ type: "FETCH_ERROR" });
        });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  }, []);

  return (
    <div>
      <h2 className="hk-text-secondary">
        Fetching Data using{" "}
        <span className="hk-text-primary">useReducer() </span> 2
      </h2>
      <div>
        {state.loading ? "Loading" : state.post.title}
        {state.error ? (
          <span className="hk-text-danger">{state.error}</span>
        ) : null}
      </div>
    </div>
  );
}

export default ReducerApi2;
