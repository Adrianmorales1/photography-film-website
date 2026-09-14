export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="h-[1.4375rem] list-item relative pl-[1.35rem] [list-style-type:none]">
      <span className="w-[0.35rem] h-full block absolute top-0 left-[0.45rem] leading-[1.375rem]">
        •
      </span>
      {d.text}
    </li>
  );
}
