import React from 'react'
import { FaJsSquare } from 'react-icons/fa'
import { Card } from '../Card'
import { DedicatedAvailability } from '../Availability'

export default function JsOrgCard({ name }) {
  const lowerCase = name.toLowerCase()

  return (
    <Card title="js.org" key={lowerCase} nameList={[lowerCase]}>
      {(name) => (
        <DedicatedAvailability
          name={`${name}.js.org`}
          provider="dns"
          url={`https://${name}.js.org`}
          icon={<FaJsSquare />}
        />
      )}
    </Card>
  )
}