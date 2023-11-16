'use client'

import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()

  return <div>Application Id: {params.appId}</div>
}
