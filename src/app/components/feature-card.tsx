import type { DittoNodeMetaMap } from "../ditto-meta";
import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, meta, styles }: { d: FeatureCardData; meta: DittoNodeMetaMap; styles: FeatureCardStyles }) {
  return (
    <div className="w-[19.0625rem] block pt-5 pl-5 shrink-0 max-md:w-[22.8125rem] max-md:pt-2.5 max-md:pl-2.5 md:max-lg:w-[11.925rem] md:max-lg:pt-[0.9375rem] md:max-lg:pl-[0.9375rem]">
      <a className="h-full block overflow-hidden bg-clr-2 cursor-pointer" data-component="link" href={d.href} target="_self">
        {" "}
        <div data-ditto-id={meta[2]?.anchor} className="h-full flex py-12.5 px-7.5 flex-col grow gap-12.5 max-md:py-10 max-md:gap-10">
          <div data-ditto-id={meta[3]?.anchor} className={cn("block", styles.className)}>
            <h3 className="block self-center text-color-007 [font-family:Prata] text-[1.0625rem] leading-[1.6875rem] tracking-[1.68px] max-md:text-[0.9375rem] max-md:leading-[1.5625rem] max-md:tracking-[1.54px] md:max-lg:text-base md:max-lg:leading-[1.625rem] md:max-lg:tracking-[1.61px]" data-component="heading">
              {d.title}
            </h3>
            {" "}
            <hr className="box-content w-[14.0625rem] h-px block my-5 text-color-004 bg-foreground max-md:w-[18.4375rem] md:max-lg:w-29" />
            {" "}
            <p data-ditto-id={meta[6]?.anchor} className="block self-center [font-family:Baskervville] text-base leading-[1.3125rem] tracking-[1.62px]">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
