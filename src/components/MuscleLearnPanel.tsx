"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Link2, Stethoscope } from "lucide-react";
import type { MuscleId, Muscle } from "@/data/muscles";
import { getMuscle } from "@/data/muscles";
import { getMuscleAnatomy, type MuscleRelation } from "@/data/anatomy";
import { MuscleReferenceImage } from "./anatomy/MuscleReferenceImage";

type Props = {
  muscle: Muscle;
  onRelatedSelect: (id: MuscleId) => void;
};

const relationLabel: Record<MuscleRelation, string> = {
  synergist: "Works with",
  antagonist: "Opposes",
  adjacent: "Nearby",
};

export function MuscleLearnPanel({ muscle, onRelatedSelect }: Props) {
  const anatomy = getMuscleAnatomy(muscle.id);

  return (
    <motion.div
      key={`learn-${muscle.id}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="learn-scroll"
    >
      <MuscleReferenceImage muscleId={muscle.id} name={muscle.name} />

      <section className="learn-section">
        <h4>
          <BookOpen size={16} /> Actions
        </h4>
        <ul className="learn-list">
          {anatomy.actions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </section>

      <div className="anatomy-stat-grid">
        <div>
          <span>Origin</span>
          <strong>{anatomy.origin}</strong>
        </div>
        <div>
          <span>Insertion</span>
          <strong>{anatomy.insertion}</strong>
        </div>
        <div>
          <span>Innervation</span>
          <strong>{anatomy.innervation}</strong>
        </div>
        <div>
          <span>Blood supply</span>
          <strong>{anatomy.bloodSupply}</strong>
        </div>
      </div>

      <section className="learn-section fun-fact">
        <h4>
          <Lightbulb size={16} /> Did you know?
        </h4>
        <p>{anatomy.funFact}</p>
      </section>

      <section className="learn-section">
        <h4>
          <Stethoscope size={16} /> Common issues
        </h4>
        <ul className="learn-list">
          {anatomy.commonIssues.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      </section>

      <section className="learn-section">
        <h4>Stretch tips</h4>
        <ul className="learn-list tips">
          {anatomy.stretchTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      {anatomy.relatedMuscles.length > 0 && (
        <section className="learn-section">
          <h4>
            <Link2 size={16} /> Related muscles
          </h4>
          <div className="related-muscles">
            {anatomy.relatedMuscles.map(({ id, relation }) => {
              const related = getMuscle(id);
              if (!related) return null;
              return (
                <button
                  key={id}
                  type="button"
                  className="related-muscle-btn"
                  style={{ ["--chip" as string]: related.color }}
                  onClick={() => onRelatedSelect(id)}
                >
                  <i style={{ background: related.color }} />
                  <span className="related-name">{related.name}</span>
                  <span className="related-relation">{relationLabel[relation]}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </motion.div>
  );
}
