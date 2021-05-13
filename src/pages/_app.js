import '../styles/globals.css'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <p>test</p>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
