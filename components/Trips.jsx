import Trip from './Trip'

export default function Trips(data) {

  const trips = data.trips

  return (
    trips.map((trip) => {
      return (
        <Trip key={trip.label} />
      )
    })
  )
}