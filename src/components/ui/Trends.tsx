import { IoTriangleSharp } from "react-icons/io5";

const TREND_ICON_PROPS = {
  size: 20,
  stroke: "black",
  strokeWidth: 45,
};

export function TrendUp() {
  return <IoTriangleSharp {...TREND_ICON_PROPS} className="text-green-500" />;
}

export function TrendDown() {
  return (
    <IoTriangleSharp
      {...TREND_ICON_PROPS}
      className="text-red-600 rotate-180"
    />
  );
}

export function TrendStable() {
  return <div className="w-5 h-2 border-2 border-black bg-cyan-400" />;
}
