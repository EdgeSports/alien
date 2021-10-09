import { useRef, useEffect, useState } from "react";
import { AdjustablePieChart, ProportionType } from "./AdjustablePieChart";

const PCCPieChart = ({
  proportions,
}: {
  proportions: Array<ProportionType>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Ingore linting next line because pieChart is purposefully not used here
  // eslint-disable-next-line
  const [pieChart, setPieChart] = useState<AdjustablePieChart | undefined>(
    undefined
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Error: AdjustablePieChart needs an html5 canvas");
      return;
    }

    // Create the pie chart
    setPieChart(
      new AdjustablePieChart({
        canvas,
        context,
        proportions,
        onChange: () => {},
      })
    );
  }, [proportions]);

  return (
    <canvas width="400" height="400" ref={canvasRef}>
      Your browser is too old!
    </canvas>
  );
};

export { PCCPieChart };
