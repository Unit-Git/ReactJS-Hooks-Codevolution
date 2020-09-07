import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { useReducer } from "react";
import { Reducer, StoreReducer } from "./reducer.service";
import { BadgeCount } from "../useReducer/CounterOneReducer";
import { CRProvider } from "./context.service";

function UseCRService() {
  const [store, dispatch] = useReducer(Reducer, StoreReducer);

  return (
    <CRProvider
      value={{
        store: store,
        storeDispatch: dispatch,
      }}
    >
      <div>
        <h1>useContext and useReducer</h1>
        <BadgeCount>{store.count}</BadgeCount>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CRProvider>
  );
}

export default UseCRService;
