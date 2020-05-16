import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";
import "./styles.css";

const DATA_DEFAULT = [25, 30, 45, 60, 20, 20, 43];

export default function App() {
  const [data, setData] = useState(DATA_DEFAULT);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => value)
      .curve(curveCardinal);
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("r", value => value)
    //   .attr("cx", value => value * 2)
    //   .attr("cy", value => value * 2)
    //   .attr("stroke", "red");
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  return (
    <>
      <svg ref={svgRef}>
        <path d="M0, 150 100, 100 150, 120" stroke="blue" fill="none" />
      </svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
    </>
  );
}
