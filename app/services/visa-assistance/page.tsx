import { Metadata } from 'next';
import VisaAssistanceContent from './VisaAssistanceContent';

export const metadata: Metadata = {
  title: 'Visa Assistance Services | Vizaid Travel',
  description: 'Expert visa assistance for destinations worldwide. We guide you through the entire visa application process.',
};

export default function VisaAssistancePage() {
  return <VisaAssistanceContent />;
}
