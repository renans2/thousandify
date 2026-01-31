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
      <div className="mx-auto text-tag-text-yellow text-xs rounded-l-4xl rounded-r-4xl bg-tag-bg-yellow p-1 flex items-center justify-evenly w-12 border-tag-text-yellow">
        NEW
      </div>
    );
  if (positionOffset > 0)
    return (
      <div className="mx-auto rounded-l-4xl rounded-r-4xl w-fit md:w-12 bg-tag-bg-red py-1 px-2 flex items-center justify-evenly border-tag-text-red">
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
      <div className="mx-auto rounded-l-4xl rounded-r-4xl bg-tag-bg-green p-1 flex items-center justify-evenly w-12 border-tag-text-green">
        <IoTriangleSharp
          {...TREND_ICON_PROPS}
          strokeWidth={0}
          className="text-tag-text-green"
        />
        <span className="text-tag-text-green text-xs">
          +{Math.abs(positionOffset)}
        </span>
      </div>
    );
  else
    return (
      <div className="mx-auto rounded-l-4xl rounded-r-4xl bg-tag-bg-blue p-1 flex items-center justify-evenly w-12 border-tag-text-blue h-6.5">
        <div className="w-5.5 h-1 bg-tag-text-blue rounded-4xl" />
      </div>
    );
}
