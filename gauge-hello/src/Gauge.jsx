import React from "react"
import { arc } from "d3-shape"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

export default Gauge