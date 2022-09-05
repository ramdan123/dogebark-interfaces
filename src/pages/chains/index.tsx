import Container from '../../components/Container'
import Head from 'next/head'
import Typography from '../../components/Typography'
import useSWR from 'swr'

const getChains = (url = 'https://chainid.network/chains.json') => fetch(url).then((res) => res.json())

export default function Status({ fallbackData }) {
  const res = useSWR('https://chainid.network/chains.json', getChains, { fallbackData })
  const { data } = res
  return (
    <Container id="chains-page" className="py-4 space-y-6 md:py-8 lg:py-12" maxWidth="6xl">
      <Head>
        <title>Chains | DOGEBARK</title>
        <meta key="description" name="description" content="Chains..." />
      </Head>
      <div className="w-full max-w-6xl mx-auto">
        <Typography component="h1" variant="h1" className="w-full mb-4">
          Chains
        </Typography>
        <div className="grid items-start justify-start grid-cols-2 gap-3 mx-auto ">
          {data.map((chain, key) => {
            return (
              <div key={key} className="h-full p-1 rounded bg-dark-900 text-primary">
                <pre className="h-full p-4 rounded bg-dark-1000">
                  <code>{JSON.stringify(chain, null, 2)}</code>
                </pre>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  return { props: { fallbackData: await getChains() } }
}
