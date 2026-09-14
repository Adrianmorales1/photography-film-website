import type { LogoStyles } from "../_styles";
export type LogoData = {
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={styles.className} target="_self">
      {" "}
      <img className={styles.className2} data-component={d.kind} alt="" src="/placeholder.svg" />
      {" "}
    </a>
  );
}
