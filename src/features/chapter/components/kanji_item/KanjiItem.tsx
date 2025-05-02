import * as React from "react";
import clsx from "clsx";

export interface KanjiItemProps {
  kanji?: string;
}

export const KanjiItem = ({ kanji = "" }: KanjiItemProps) => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = React.useState<string>("");

  const loadSvg = async () => {
    const codePoint = kanji.codePointAt(0)?.toString(16).padStart(5, "0");
    const path = `/kanji/${codePoint}.svg`;

    try {
      const res = await fetch(path);
      const text = await res.text();
      setSvgContent(text);
    } catch (err) {
      console.error("Failed to load SVG:", err);
    }
  };

  React.useEffect(() => {
    loadSvg();
  }, [kanji]);

  React.useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const paths = svgEl.querySelectorAll("path");

    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `draw-stroke 0.6s ease forwards`;
      path.style.animationDelay = `${index * 0.5}s`;
      path.style.stroke = "#000";
      path.style.fill = "none";
      path.style.strokeWidth = "10";
    });

    // Total duration = delay per stroke + stroke duration
    const totalDuration = paths.length * 0.5 + 0.6;

    const timer = setTimeout(() => {
      setSvgContent(""); // reset
      setTimeout(() => {
        loadSvg(); // reload to restart animation
      }, 10);
    }, totalDuration * 1000);

    return () => clearTimeout(timer); // cleanup on re-render
  }, [svgContent]);

  return (
    <div
      className={clsx(
        "kanji-animation",
        "grid grid-cols-1 place-content-center place-items-center",
        "w-[4rem] h-[4rem]",
        "rounded-[50%]",
        "bg-primary"
      )}
    >
      <div style={{ width: "1.5rem", height: "1.5rem", margin: "0 auto" }}>
        {svgContent && (
          <svg
            ref={svgRef}
            viewBox="0 0 109 109"
            width="100%"
            height="100%"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
      </div>

      <style>{`
        @keyframes draw-stroke {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
