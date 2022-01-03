import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
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
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import * as Sentry from "@sentry/nextjs";

// import Head from "next/head";
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
  type: "service_account",
  project_id: "woogie-project",
  private_key_id: "cf83e663722cf089bd18304571bd36991d53252c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCuren29l2HkBg7\n5oxdKCj6NI+6jtVp9dWA2QrMk6Yh5731nZux+/1O1Ip+gtqaJsX58QhcNznjSbyR\nK6C6625x8D9UFwyWFlGe0DzNtGvYbQDuQq+WATs592Rr7noctMykaUVpL0nIXJ5Z\nF2V9MAD1JNLYuvMR7L8beyAQy0y+WNZKFXWoFXO5reWDePQ1Ioa8+cw3KGKe99wR\naO+ROtrB2sR3n7xJXpO5gHhgxAJK7ZFnTX7Ru4LNO9tduJMY9aEe8lKTyBGi6Vom\nfDKM+4sWdwuBylmxjB45NmyJGbKa3wnlzkXBHTw2LVEc6ilW5ANPhnOf0+QpVcRl\nJXjFnL17AgMBAAECggEADjfkx+/kzBCMEHAjM7/9meQmYNqYf3/9qXfBO8a26qKY\n4UG7dyDaTQza2xJepdaLHd2jPxJVuWz6ltx0wFJCkq6qEPexVBQr/5/Wmy3Y62xv\n+3TdIvolroG3IFvwf56t26If/sBVIqR7VSgk4CxEn6+oI/EPsQFSyvNaOFO8AvBI\nimXZ3vt9OG9uyTloLrL1dl8klzWx+tfzLjB3crKPuQaa+pf4Rlj6fg44Gvop6ltz\npMiHDMuzFlfmiGWvGG1rsYDc5Zk1XTqC4SSaslqKh+KaK8XXkybNKjfr+pISPbIk\nUm6inWo7xsZhVkSTSTZ/qc7d5V4+ABkIkt+WXlaIcQKBgQDvxjXJXnkqLnvNulF6\nGetp2u+hp5YoFpeHY0hn9d1kvpwDug6xiaMZaG+4+awHF7tNRpyows6gdu8ghmK8\nfXPBeBWitrzCuE4dOmHKDe/A02Ky6iH/0cfp6BAfGGL7ZyH2CYHuFc7qpJF69BEa\nQrsuK6y8dej2GuIBNf2ZS0AvcQKBgQC6gAQJQE6njw0tqVPxmFdUfKgmRdh55qew\npTfMS8YnZtTjSIvv+sVxfCZb9YN7nm9tv0/VWNEzJj0joszmjwFaGcUtSS73XNPP\n+ox8p2TQ76SyH3F7fbSwRd4wVcPl1cff1hwQEQDCJtk715saFBkMywtf9J5kmSPm\nUSYJqhFdqwKBgHbKl5lFcfghAXtCZN1+e/B85J4NXkpMLxSHbrb6y43/FWKPSnpQ\n+3o6EKfvInh9HHHDmxfNM/uyEPTnP4GtEa13ZhiwOkKqdyDp7MrjLrY0xEBp2SBZ\n+ZZ8P4h4V4nAZcX0neer7FC56c2ln9eH2h6cyr6wGBPd67y32AWbj5gxAoGAUVBL\ncjUllgza9BOl0+pV+TI4pidB0TRt3KjMgThwdvFw1H/m84Tk3SwCFYof/5/+eV02\nU5Db9W8wrP7oU4X6Uux1ed80qQlCGKXm5tqdLDOwHTF0ayFNzKVJ0M00Elt5P/C8\nX4zqRbxmbp78swwcN+W3WejvvnC+pEaxTPlnhO0CgYB/fseaY1IyiChubZxnvIot\nFfj5foIQzujADev4hT3cygUsEWgXurcZBj6cp9TIcQdj99Y+/RrrFWNR4wEjyjaj\nD9smVl9XV6HfKZbt/t2Qz9JzGW3iC8VbCIb26OEhWR25ZAIAo6qWYePfop6Y5fs+\nHe6O0QlCYbR/We81MC+FSA==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-1h8da@woogie-project.iam.gserviceaccount.com",
  client_id: "102543135877558199648",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1h8da%40woogie-project.iam.gserviceaccount.com",
};

// Email 인증
export const actionCodeSettings = {
  url: "http://woogie-project.firebaseapp.com",
  handleCodeInApp: true,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

Sentry.init({
  dsn: "https://44bad86b8ae6483faa3b5768bc74f87b@o1091877.ingest.sentry.io/6109505",
});

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

  // 서버와 브라우저 구분하는 작업 (3가지 typeof / process / useEffect)
  // if( typeof window === "undifined" ) // 브라우저라면
  // if( typeof window !== "undifined" ) // 서버 라면

  // if (process.browser) // 현재 브라우저라면
  // if (!process.browser) // 현재 서버라면

  // useEffect()는 브라우저 동작
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
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

  return (
    <>
      {/* <Head> 모든 페이지에서 카카오 맵을 다운로드 받으므로 비효율적임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4c33ef03752164bbd0f08a2dfcc871f3"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={Value}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
