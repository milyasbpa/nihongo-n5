import * as React from "react";

export interface KanjiQuestionProps {
  kanji?: string;
}

export const KanjiQuestion = ({ kanji = "" }: KanjiQuestionProps) => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = React.useState<string>("");

  React.useEffect(() => {
    const loadSvg = async () => {
      const codePoint = kanji.codePointAt(0)?.toString(16).padStart(4, "0");
      const path = `/kanji/${codePoint}.svg`; // Adjust if served differently

      const res = await fetch(path);
      const text = await res.text();
      setSvgContent(text);
    };

    loadSvg();
  }, [kanji]);
  return (
    <div>
      <svg
        ref={svgRef}
        width="200"
        height="200"
        viewBox="0 0 109 109"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      <style>
        {`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
