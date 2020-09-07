import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const RowUser = styled.div`
  width: 1fr;
  line-height: 1.8rem;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: stretch;
  position: relative;
`;

const CardUser = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 1;
  justify-content: center;
  padding: 1rem 1.2rem;
  margin: 0.8rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.7);
  }
`;

const UserName = styled.h3`
  margin: 0;
  font-family: "Arial";
`;

const UserEmail = styled.h5`
  margin: 0;
  color: #5a5a5a;
  font-family: "Arial";
`;

function DataFetching() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 style={{ textDecoration: "2px #333 underline " }}>
        Data fetching with hook
      </h1>
      <RowUser>
        {users.map(user => {
          return (
            <CardUser key={user.id}>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </CardUser>
          );
        })}
      </RowUser>
    </div>
  );
}

export default DataFetching;
