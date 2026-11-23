import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';

/** The site's standard "talk to us" CTA — one source for this copy wherever it appears. */
export function DataDecisionsCta() {
  return (
    <CtaBand
      heading="Ready to turn your data into decisions?"
      paragraph="Build a unified, AI-ready foundation in weeks — not months. Talk to our architects about your data estate, your AI ambitions, and the fastest path between them."
    >
      <Button href="/contact" variant="molten">
        Talk to Experts
      </Button>
      <Button href="/industries" variant="ghost-dark">
        Explore Industry Solutions
      </Button>
    </CtaBand>
  );
}
