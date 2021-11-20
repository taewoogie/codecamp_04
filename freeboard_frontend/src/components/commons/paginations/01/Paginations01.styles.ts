import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Page = styled.span`
  margin: 0px 15px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
