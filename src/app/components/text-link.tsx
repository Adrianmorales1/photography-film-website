import type { DittoNodeMetaMap } from "../ditto-meta";
export type TextLinkData = Record<string, never>;
/** A text link. */
export default function TextLink({ d, meta }: { d: TextLinkData; meta: DittoNodeMetaMap }) {
  return (
    <a className="w-320 h-200 block absolute top-0 left-0 opacity-0 cursor-pointer" href="/hines" target="_self">
      {"  "}
      <div className="h-full border-t-[40px] border-solid border-clr-0 border-r-[40px] border-b-[70px] border-l-[40px] flex absolute top-0 inset-x-0 p-[0.3125rem] flex-col justify-center items-center overflow-hidden text-center bg-color-003">
        <h3 className="block max-w-200 text-border [font-family:Prata] text-[4.375rem] leading-[4.8125rem] max-md:text-[2.1875rem] max-md:leading-[2.4375rem] md:max-lg:text-[3.125rem] md:max-lg:leading-[3.4375rem]" data-component="heading">
          {"\nINSPIRED, EVERYWHERE\n"}
        </h3>
        {" "}
        <p className="h-8 block max-w-200 mt-2.5 text-border text-xl leading-[1.4375rem] max-md:h-[3.6rem] max-lg:[font-size:inherit] max-lg:leading-[inherit] md:max-lg:h-[1.8rem]">
          <span className="inline leading-8 max-lg:leading-[1.8125rem]">
            {"\nPhotographer • Filmmaker • Educator\n"}
          </span>
          {" "}
        </p>
        {" "}
        <span data-ditto-id={meta[5]?.anchor} className="h-[2.95rem] border border-solid border-border block mt-[1.5625rem] py-[0.7875rem] px-[1.9125rem] rounded-[10px] text-color-001 transform-[matrix(0.95,0,0,0.95,0,0)] origin-[147.461px_23.5938px] max-lg:h-[42.7px] max-lg:py-[11.3px] max-lg:px-[27.5px] max-lg:text-base max-lg:leading-4.5 max-lg:origin-[132.812px_21.3281px]">
          {" "}
          <span className="inline">
            Discover Professor Hines
          </span>
          {" "}
        </span>
        {" "}
      </div>
      {" "}
    </a>
  );
}
