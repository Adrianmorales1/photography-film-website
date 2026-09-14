import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative pl-[1.35rem] [list-style-type:none]", styles.className)}>
      <span className="w-[0.35rem] h-full block absolute top-0 left-[0.45rem] leading-[1.375rem]">
        •
      </span>
      {d.text}
    </li>
  );
}
