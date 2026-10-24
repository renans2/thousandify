import useLocalStorage from "../../hooks/useLocalStorage";
import Icon from "./Icon";

export default function Warning() {
  const {
    data: [showWarning, setShowWarning],
    hydrated,
  } = useLocalStorage<boolean>("SHOW_WARNING", true);

  if (!showWarning || !hydrated) return null;

  return (
    <div className="absolute w-full pr-6 text-xs md:text-base bg-warning-bg text-warning-text flex justify-center items-center py-1">
      <p className="text-center">
        ⚠️ This is not an official Spotify website, click{" "}
        <a href="/about" className="underline">
          here
        </a>{" "}
        to know more ⚠️
      </p>
      <button
        onClick={() => setShowWarning(false)}
        className="absolute right-1 cursor-pointer rounded-4xl p-1"
        aria-label="Dismiss warning"
      >
        <Icon name="cross" size={16} />
      </button>
    </div>
  );
}
