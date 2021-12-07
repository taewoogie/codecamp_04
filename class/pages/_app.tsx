import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const firebaseApp = initializeApp(firebaseConfig);

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

  // 서버와 브라우저 구분하는 작업
  // if( typeof window === "undifined" ) // 브라우저라면
  // if( typeof window !== "undifined" ) // 서버 라면

  // if (process.browser) // 현재 브라우저라면
  // if (!process.browser) // 현재 서버라면

  // useEffect()는 브라우저 동작
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) setAccessToken(accessToken);
  }, []);
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    // headers: {
    //   authorization: `Bearer ${accessToken}`,
    // },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),
    cache: new InMemoryCache(),
  });

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
