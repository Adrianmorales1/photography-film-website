// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const TextLink_meta: DittoNodeMetaMap[] = [
    { 5: { anchor: "style-div-3" } },
    { 5: { anchor: "style-link-2" } },
    { 5: { anchor: "style-span-2" } },
    { 5: { anchor: "style-div-4" } },
    { 5: { anchor: "style-div-5" } },
    { 5: { anchor: "style-gallery-0" } },
    { 5: { anchor: "style-p" } },
    {  }
];
export const FeatureCard_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-date-2-1" } },
    { 3: { anchor: "style-strong" }, 6: { anchor: "style-div-8" } },
    {  },
    { 6: { anchor: "style-span-3" } }
];
