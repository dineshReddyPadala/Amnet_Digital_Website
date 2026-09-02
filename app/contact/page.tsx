import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Wrap } from '@/components/ui/Wrap';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Amnet Digital — Talk to an AI Expert',
  description: 'Tell us about your data estate and AI ambitions. An architect — not a salesperson — responds within one business day.',
};

const OFFICES = [
  { flag: '🇺🇸', title: 'Austin, Texas — HQ', body: 'United States · Global strategy & client partnerships' },
  { flag: '🇮🇳', title: 'Hyderabad, India', body: 'Global delivery center · 300+ engineers, CoEs & innovation labs' },
  { flag: '🇬🇧', title: 'London, United Kingdom', body: 'European client engagement & consulting' },
  { flag: '🇦🇪', title: 'Dubai, UAE', body: 'Middle East growth market operations' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        eyebrow="Talk to an expert"
        heading={
          <>
            Let&apos;s engineer your <span className="grad-text">next advantage</span>
          </>
        }
        lede="Tell us about your data estate, your AI ambitions, or the problem keeping your leadership up at night. An architect — not a salesperson — will respond within one business day."
      />

      <Section>
        <Wrap>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-[60px] tablet:gap-9 items-start">
            <ContactForm />
            <div className="grid gap-[18px]">
              {OFFICES.map((office) => (
                <Card key={office.title} icon={office.flag} title={office.title}>
                  <p>{office.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
