import { Reveal } from "./Reveal";

type Props = {
  id: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
};

/** Large serif section title with a short supporting line. */
export function SectionHeading({ id, title, lede, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span
        aria-hidden="true"
        className={`mb-5 block h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet ${
          centered ? "mx-auto" : ""
        }`}
      />
      <h2 id={`${id}-title`} className="font-display text-[2.6rem] leading-[1.05] text-white sm:text-5xl md:text-[3.6rem]">
        {title}
      </h2>
      {lede ? <p className="mt-5 text-lg leading-relaxed text-haze">{lede}</p> : null}
    </Reveal>
  );
}
