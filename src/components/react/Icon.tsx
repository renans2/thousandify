import { ICONS, type IconName } from "../../lib/icons";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: Props) {
  const { viewBox, body } = ICONS[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
