import { Metadata } from 'next';
import AirTicketingContent from './AirTicketingContent';

export const metadata: Metadata = {
  title: 'Air Ticketing Services | Vizaid Travel',
  description: 'Book flights worldwide with competitive prices. We partner with major airlines to offer you the best deals.',
};

export default function AirTicketingPage() {
  return <AirTicketingContent />;
}
