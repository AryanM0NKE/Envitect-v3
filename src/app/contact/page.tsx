import type { Metadata } from 'next'
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Consultation',
  description: 'Contact Envitect Designs...',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  );
}