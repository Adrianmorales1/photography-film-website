import type { Logo2Styles } from "../_styles";
export type Logo2Data = {
  kind?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <a className={styles.className} target="_self">
      {" "}
      <img className={styles.className2} data-component={d.kind} alt="" src="/placeholder.svg" />
      {" "}
    </a>
  );
}
