import * as React from "react";
import clsx from "clsx";

export interface KanjiQuestionProps {
  kanji?: string;
}

export const KanjiQuestion = ({ kanji = "" }: KanjiQuestionProps) => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = React.useState<string>("");
  const [isReplaying, setIsReplaying] = React.useState(false);

  const loadSvg = async () => {
    const codePoint = kanji.codePointAt(0)?.toString(16).padStart(5, "0");
    const path = `/kanji/${codePoint}.svg`; // Adjust if served differently

    const res = await fetch(path);
    const text = await res.text();
    setSvgContent(text);
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
      path.style.strokeWidth = "2";
    });
  }, [svgContent]);

  const handleReplay = () => {
    setIsReplaying(true);
    setSvgContent(""); // reset
    setTimeout(() => {
      loadSvg(); // load ulang
      setIsReplaying(false);
    }, 50); // delay pendek biar trigger re-render
  };
  return (
    <div
      className={clsx(
        "kanji-animation",
        "grid grid-cols-1 place-content-center place-items-center",
        "w-full"
      )}
    >
      <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
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
      <button
        onClick={handleReplay}
        disabled={isReplaying}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#333",
          border: "1px solid #555",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        🔁
      </button>

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
