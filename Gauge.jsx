import React from "react"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
      <svg style={{
        border: "1px solid pink"
      }}>
      </svg>
    </div>
  )
}

export default Gauge