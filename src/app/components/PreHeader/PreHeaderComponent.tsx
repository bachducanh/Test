import "@/app/components/PreHeader/PreHeaderComponent";
import styled from "styled-components";
import Link from "next/link";

const PreHeaderStyled = styled.div`
  background-color: #002147;
  z-index: 98;
  height: 42px;
  width: 100%;
`;

export default function PreHeaderComponent() {
  return (
    <PreHeaderStyled>    </PreHeaderStyled>
  );
}
