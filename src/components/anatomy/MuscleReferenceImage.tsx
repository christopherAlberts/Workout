"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { getMuscleIllustration, OPENSTAX_URL, COMMONS_URL } from "@/data/muscle-illustrations";
import type { MuscleId } from "@/data/muscles";

type Props = {
  muscleId: MuscleId;
  name: string;
};

export function MuscleReferenceImage({ muscleId, name }: Props) {
  const ill = getMuscleIllustration(muscleId);
  const [src, setSrc] = useState(ill.localSrc ?? ill.src);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setSrc(ill.localSrc ?? ill.src);
    setLoading(true);
    setFailed(false);
  }, [muscleId, ill.localSrc, ill.src]);

  const markLoaded = useCallback(() => {
    setLoading(false);
    setFailed(false);
  }, []);

  // Cached images may finish before onLoad is attached, or skip onLoad when src unchanged.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      markLoaded();
    }
  }, [src, muscleId, markLoaded]);

  function handleError() {
    if (ill.localSrc && src === ill.localSrc && ill.src !== ill.localSrc) {
      setSrc(ill.src);
      setLoading(true);
      return;
    }
    if (ill.src && src !== ill.src) {
      setSrc(ill.src);
      setLoading(true);
      return;
    }
    setLoading(false);
    setFailed(true);
  }

  return (
    <figure className="reference-figure reference-figure-hero">
      <div className="reference-image-wrap">
        {loading && !failed && (
          <div className="reference-loading">
            <LoaderCircle className="spin" size={24} />
          </div>
        )}
        {failed ? (
          <div className="reference-error">
            <p>Could not load reference image.</p>
            {ill.sourceFile && (
              <a
                href={`${COMMONS_URL}/wiki/File:${encodeURIComponent(ill.sourceFile.replace(/ /g, "_"))}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Wikimedia Commons
              </a>
            )}
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            ref={imgRef}
            key={`${muscleId}-${src}`}
            src={src}
            alt={`Medical reference illustration: ${name}`}
            loading="eager"
            decoding="async"
            onLoad={markLoaded}
            onError={handleError}
            style={{ opacity: loading ? 0 : 1, transition: "opacity 0.25s" }}
          />
        )}
      </div>
      <figcaption>
        <p>{ill.caption}</p>
        <cite>
          {ill.credit}
          {" · "}
          <a href={OPENSTAX_URL} target="_blank" rel="noreferrer">
            OpenStax
          </a>
          {ill.sourceFile && (
            <>
              {" · "}
              <a
                href={`${COMMONS_URL}/wiki/File:${encodeURIComponent(ill.sourceFile.replace(/ /g, "_"))}`}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </>
          )}
        </cite>
      </figcaption>
    </figure>
  );
}
