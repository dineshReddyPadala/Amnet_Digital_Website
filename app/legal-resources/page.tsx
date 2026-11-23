import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { Card } from '@/components/ui/Card';
import { LegalTitleBand } from '@/components/legal/LegalTitleBand';
import { LEGAL_POLICIES } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Legal Resources',
  description: 'Amnet Digital privacy policy, cookies policy and terms of use.',
};

export default function LegalResourcesPage() {
  return (
    <>
      <LegalTitleBand title="Legal Resources" />
      <Section tight>
        <Wrap>
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8 mobile:gap-6">
            {LEGAL_POLICIES.map((policy) => (
              <Card key={policy.href}>
                <article className="h-full flex flex-col">
                  <h2 className="text-[26px] leading-tight font-semibold tracking-normal text-ink">{policy.title}</h2>
                  <p className="mt-2 text-[13px]">{policy.updated}</p>
                  <p className="mt-6 text-[15px] leading-7 text-ink/80">{policy.excerpt}</p>
                  <Link
                    href={policy.href}
                    className="mt-auto pt-8 text-[15px] font-semibold text-gold hover:text-bronze transition-colors"
                  >
                    See More -&gt;
                  </Link>
                </article>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  );
}
