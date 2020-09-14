import styled from "styled-components";

export const HKWrapper = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-areas: "sidebar main";
  overflow: hidden;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

export const HKSidebar = styled.aside`
  position: relative;
  grid-area: sidebar;
  width: 250px;
  height: 100%;
`;

export const HKMain = styled.main`
  grid-area: main;
  min-height: 100%;
  overflow-y: scroll;
  width: auto;
`;
