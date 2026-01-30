import { IoTriangleSharp } from "react-icons/io5";
import { ImDiamonds } from "react-icons/im";

const TREND_ICON_PROPS = {
  size: 20,
  stroke: "black",
};

export function TrendUp() {
  return (
    <IoTriangleSharp
      {...TREND_ICON_PROPS}
      strokeWidth={25}
      className="text-green-500"
    />
  );
}

export function TrendDown() {
  return (
    <IoTriangleSharp
      {...TREND_ICON_PROPS}
      strokeWidth={25}
      className="text-red-600 rotate-180"
    />
  );
}

export function TrendStable() {
  return <div className="w-5 h-2 border border-black bg-cyan-400" />;
}

export function TrendNew() {
  return (
    <ImDiamonds
      {...TREND_ICON_PROPS}
      strokeWidth={1}
      className="text-yellow-400"
    />
  );
}
