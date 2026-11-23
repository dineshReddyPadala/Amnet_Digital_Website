/** JSON body sent by `ContactForm` to the CloudFront/Lambda contact endpoint. */
export type ContactFormPayload = {
  name: string | null;
  company: string | null;
  email: string | null;
  phone: string | null;
  title: string | null;
  service: string | null;
  message: string | null;
  /** Honeypot — non-empty submissions should be dropped. */
  website?: string | null;
};