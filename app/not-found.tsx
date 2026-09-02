import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Wrap } from '@/components/ui/Wrap';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="phero-bg text-ink border-b border-line">
      <Wrap className="text-center py-[60px]">
        <span className="eyebrow justify-center">404 — page not found</span>
        <h1 className="text-[clamp(34px,4.6vw,56px)] font-extrabold mt-[26px] mb-5 max-w-none">
          This page hasn&apos;t been forged yet.
        </h1>
        <p className="text-muted mx-auto my-5 mb-[34px] max-w-[64ch]">
          The link may be outdated. Head back home or talk to us — we&apos;ll point you in the right direction.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button href="/" variant="molten">
            Back to Home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </Wrap>
    </div>
  );
}
