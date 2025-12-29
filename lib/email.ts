import { AirTicketingInquiry, VisaInquiry, TourInquiry, ContactForm } from '@/types';

export async function sendInquiryEmail(
  type: 'air-ticketing' | 'visa' | 'tour' | 'contact',
  data: AirTicketingInquiry | VisaInquiry | TourInquiry | ContactForm
) {
  // This will be implemented with an email service (SendGrid, Resend, or Nodemailer)
  // For now, this is a placeholder that will be called from API routes
  
  const emailContent = formatEmailContent(type, data);
  
  // In production, replace this with actual email service
  console.log('Email would be sent:', emailContent);
  
  return { success: true };
}

function formatEmailContent(
  type: string,
  data: any
): string {
  let content = `New ${type} Inquiry\n\n`;
  
  switch (type) {
    case 'air-ticketing':
      const airData = data as AirTicketingInquiry;
      content += `Name: ${airData.name}\n`;
      content += `Email: ${airData.email}\n`;
      content += `Phone: ${airData.phone}\n`;
      content += `Origin: ${airData.origin}\n`;
      content += `Destination: ${airData.destination}\n`;
      content += `Departure: ${airData.departureDate}\n`;
      if (airData.returnDate) content += `Return: ${airData.returnDate}\n`;
      content += `Passengers: ${airData.passengers.adults} adults, ${airData.passengers.children} children, ${airData.passengers.infants} infants\n`;
      content += `Class: ${airData.travelClass}\n`;
      if (airData.message) content += `Message: ${airData.message}\n`;
      break;
      
    case 'visa':
      const visaData = data as VisaInquiry;
      content += `Name: ${visaData.name}\n`;
      content += `Email: ${visaData.email}\n`;
      content += `Phone: ${visaData.phone}\n`;
      content += `Nationality: ${visaData.nationality}\n`;
      content += `Destination: ${visaData.destination}\n`;
      content += `Visa Type: ${visaData.visaType}\n`;
      content += `Travel Date: ${visaData.travelDate}\n`;
      if (visaData.passportNumber) content += `Passport: ${visaData.passportNumber}\n`;
      if (visaData.message) content += `Message: ${visaData.message}\n`;
      break;
      
    case 'tour':
      const tourData = data as TourInquiry;
      content += `Name: ${tourData.name}\n`;
      content += `Email: ${tourData.email}\n`;
      content += `Phone: ${tourData.phone}\n`;
      content += `Destination: ${tourData.destination}\n`;
      content += `Tour Type: ${tourData.tourType}\n`;
      content += `Dates: ${tourData.startDate} to ${tourData.endDate}\n`;
      content += `Group Size: ${tourData.groupSize}\n`;
      if (tourData.preferences) content += `Preferences: ${tourData.preferences}\n`;
      if (tourData.message) content += `Message: ${tourData.message}\n`;
      break;
      
    case 'contact':
      const contactData = data as ContactForm;
      content += `Name: ${contactData.name}\n`;
      content += `Email: ${contactData.email}\n`;
      content += `Phone: ${contactData.phone}\n`;
      content += `Subject: ${contactData.subject}\n`;
      content += `Message: ${contactData.message}\n`;
      break;
  }
  
  return content;
}



