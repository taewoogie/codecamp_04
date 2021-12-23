import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgray; */
`;

// 레이아웃 숨길 페이지
const HIDDEN_HEADERS = ["/", "/signinGoogle", "/signinID", "/signup"];
const HIDDEN_BANNERS = [
  "/",
  "/signinGoogle",
  "/signinID",
  "/signup",
  "/product",
];
const HIDDEN_NAVS = ["/", "/signinGoogle", "/signinID", "/signup"];
const HIDDEN_FOOTERS = ["/", "/signinGoogle", "/signinID", "/signup"];

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanners = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenNavs = HIDDEN_NAVS.includes(router.asPath);
  const isHiddenFooters = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {/* {!isHiddenBanners && <LayoutBanner />} */}
      {!isHiddenNavs && <LayoutNavigation />}
      <Body>{props.children}</Body>
    </>
  );
}
