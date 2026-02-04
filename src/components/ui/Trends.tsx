import { IoTriangleSharp } from "react-icons/io5";

const TREND_ICON_PROPS = {
  size: 15,
};

export default function Trend({
  positionOffset,
}: {
  positionOffset: number | null;
}) {
  if (positionOffset === null)
    return (
      <div className="w-7.5 md:w-12 p-0 py-1 md:p-1 mx-auto text-tag-text-yellow text-xs rounded-l-4xl rounded-r-4xl bg-tag-bg-yellow flex items-center justify-evenly border-tag-text-yellow">
        <span className="hidden md:flex">NEW</span>
        <span className="md:hidden">N</span>
      </div>
    );
  if (positionOffset > 0)
    return (
      <div className="w-7.5 md:w-12 p-0 py-1 md:p-1 mx-auto rounded-l-4xl rounded-r-4xl bg-tag-bg-red flex items-center justify-evenly border-tag-text-red">
        <IoTriangleSharp
          {...TREND_ICON_PROPS}
          strokeWidth={0}
          className="hidden md:flex text-tag-text-red rotate-180"
        />
        <span className="text-tag-text-red text-xs">-{positionOffset}</span>
      </div>
    );
  else if (positionOffset < 0)
    return (
      <div className="w-7.5 md:w-12 p-0 py-1 md:p-1 mx-auto rounded-l-4xl rounded-r-4xl bg-tag-bg-green flex items-center justify-evenly border-tag-text-green">
        <IoTriangleSharp
          {...TREND_ICON_PROPS}
          strokeWidth={0}
          className="hidden md:flex text-tag-text-green"
        />
        <span className="text-tag-text-green text-xs">
          +{Math.abs(positionOffset)}
        </span>
      </div>
    );
  else
    return (
      <div className="w-7.5 md:w-12 p-0 py-1 md:p-1 mx-auto rounded-l-4xl rounded-r-4xl bg-tag-bg-blue flex items-center justify-evenly border-tag-text-blue h-6.5">
        <div className="w-4 md:w-5 h-1 bg-tag-text-blue rounded-4xl" />
      </div>
    );
}
