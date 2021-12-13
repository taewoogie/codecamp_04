import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
// import { initializeApp } from "firebase/app";
import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  createContext,
} from "react";
import { getAccessToken } from "../src/commons/libraries/Token/getAccessToken";

const firebaseConfig = {
  apiKey: "AIzaSyB3FSnWLebiGYOvA-GlEbdDwPfMW8Tvq0M",
  authDomain: "woogie-project.firebaseapp.com",
  projectId: "woogie-project",
  storageBucket: "woogie-project.appspot.com",
  messagingSenderId: "706248342975",
  appId: "1:706248342975:web:6f8e5df74172e2a936350a",
  measurementId: "G-PZFJ26BF5D",
};

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const Value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) {
      getAccessToken(setAccessToken);

      // console.log(accessToken);
    }
  }, []);

  // operation => 방금 실패한 쿼리
  // forward => 쿼리 재전송
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`, // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
            },
          });
          return forward(operation);
        } else if (err.extensions?.code === "INTERNAL_SERVER_ERROR") {
          console.log(err);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken") || "";
  //   if (accessToken) setAccessToken(accessToken);
  // }, []);

  // const uploadLink = createUploadLink({
  //   uri: "http://backend04.codebootcamp.co.kr/graphql",
  //   headers: { authorization: `Bearer ${accessToken}` },
  // });

  // const client = new ApolloClient({
  //   link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
  //   cache: new InMemoryCache(),
  // });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
