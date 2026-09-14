import type { LogoStyles } from "../_styles";
export type LogoData = {
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={styles.className}>
      <div className={styles.className2}>
        <img className={styles.className3} alt="" src="/placeholder.svg" data-component={d.kind} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
