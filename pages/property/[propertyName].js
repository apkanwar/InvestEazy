import { useRouter } from "next/router"

export default function PropertyDetails() {
  const router = useRouter();
  const propertyName = router.query.propertyName

  return (
    <div>
      <h1>Details about the property {propertyName}</h1>
    </div>
  )
}