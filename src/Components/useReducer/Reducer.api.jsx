import React, { useState, useEffect } from "react";
import Axios from "axios";

function ReducerApi() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPost] = useState({});

  useEffect(() => {
    try {
      Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
          setLoading(false);
          setPost(res.data);
          setError("");
        })
        .catch(err => {
          setLoading(false);
          setPost({});
          setError("Opps something went wrong!");
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2 className="hk-text-secondary">
        Fetching Data using{" "}
        <span className="hk-text-primary">useReducer()</span>
      </h2>
      <div>
        {loading ? "Loading" : posts.title}
        {error ? <span className="hk-text-danger">{error}</span> : null}
      </div>
    </div>
  );
}

export default ReducerApi;
