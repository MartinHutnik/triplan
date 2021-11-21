import { useRouter } from 'next/router'
import Head from 'next/head'

export default function TripPage({ car }) {

  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Head>
        <title>{car.color} {car.id}</title>
      </Head>

      <main>
        <h1>
          {id}
        </h1>

        <img src={car.image} width="300px" />

      </main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  }
}