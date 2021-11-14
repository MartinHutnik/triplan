export async function getStaticProps() {

  const request = await fetch('https://task-devel.cleevio-vercel.vercel.app/api/country', {
    headers: new Headers({
      'Authorization': `Bearer ${process.env.TRIPS_APP_TOKEN}`,
    }),
  })

  const countries = await request.json()

  return {
    props: { countries },
  }

}