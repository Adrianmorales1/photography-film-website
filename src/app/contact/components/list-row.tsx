import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  id: string;
  value: string;
  htmlFor: string;
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("table", styles.className)}>
      <input className="w-[0.8125rem] h-[0.8125rem] inline-block max-w-full mr-[0.5625rem] cursor-default" data-component="input" id={d.id} name="checkbox-3-0" type="checkbox" value={d.value} />
      {" "}
      <label className="inline cursor-default" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      {" "}
    </li>
  );
}
