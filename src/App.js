import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";
import "./styles.css";

const DATA_DEFAULT = [25, 30, 45, 60, 20];

export default function App() {
  const [data, setData] = useState(DATA_DEFAULT);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
  }, [data]);
  return (
    <>
      <svg ref={svgRef} />;
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
