import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  kind?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("h-full block grow", styles.className)}>
      <div className={cn("h-full flex relative justify-center items-center overflow-hidden", styles.className2)}>
        <img className={cn("h-127.5 min-h-full block relative overflow-hidden pointer-events-none max-md:h-[15.6875rem] max-md:overflow-clip max-md:min-h-0", styles.className3)} data-component={d.kind} alt="" src="/placeholder.svg" />
        {" "}
      </div>
      {" "}
    </div>
  );
}
