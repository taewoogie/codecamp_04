import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {
const client = new ApolloClient({
  uri : 'http://backend04.codebootcamp.co.kr/graphql',
  // uri : 'http://example.codebootcamp.co.kr/graphql',
  // 임시저장 (cache)
  cache : new InMemoryCache()
})

  return (
  <ApolloProvider client={client}>
  
    {/* 각 페이지 컴포넌트 */}
    <Component {...pageProps} />
  
  </ApolloProvider>
  
  )
}

export default MyApp
