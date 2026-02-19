'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { AirTicketingInquiry } from '@/types';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const airTicketingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  origin: z.string().min(2, 'Origin is required'),
  destination: z.string().min(2, 'Destination is required'),
  departureDate: z.string().min(1, 'Departure date is required'),
  returnDate: z.string().optional(),
  'passengers.adults': z.string().min(1),
  'passengers.children': z.string().min(1),
  'passengers.infants': z.string().min(1),
  travelClass: z.enum(['economy', 'business', 'first']),
  message: z.string().optional(),
});

type AirTicketingFormData = z.infer<typeof airTicketingSchema>;

export default function AirTicketingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AirTicketingFormData>({
    resolver: zodResolver(airTicketingSchema),
  });

  const onSubmit = async (data: AirTicketingFormData) => {
    setIsSubmitting(true);
    try {
      const inquiryData: AirTicketingInquiry = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        origin: data.origin,
        destination: data.destination,
        departureDate: data.departureDate,
        returnDate: data.returnDate,
        passengers: {
          adults: parseInt(data['passengers.adults'], 10),
          children: parseInt(data['passengers.children'], 10),
          infants: parseInt(data['passengers.infants'], 10),
        },
        travelClass: data.travelClass,
        message: data.message,
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'air-ticketing', data: inquiryData }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }} className="rounded-xl p-6 text-center">
        <div className="text-green-400 font-semibold mb-2">Thank you for your inquiry!</div>
        <p className="text-white/70">We&apos;ll get back to you within 24 hours with the best flight options.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          variant="dark"
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          variant="dark"
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
        />
        <Input
          variant="dark"
          label="Phone Number"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          required
        />
        <Input
          variant="dark"
          label="Origin"
          placeholder="e.g., Entebbe, Uganda"
          {...register('origin')}
          error={errors.origin?.message}
          required
        />
        <Input
          variant="dark"
          label="Destination"
          placeholder="e.g., Dubai, UAE"
          {...register('destination')}
          error={errors.destination?.message}
          required
        />
        <Input
          variant="dark"
          label="Departure Date"
          type="date"
          {...register('departureDate')}
          error={errors.departureDate?.message}
          required
        />
        <Input
          variant="dark"
          label="Return Date (Optional)"
          type="date"
          {...register('returnDate')}
          error={errors.returnDate?.message}
        />
        <Select
          variant="dark"
          label="Travel Class"
          options={[
            { value: 'economy', label: 'Economy' },
            { value: 'business', label: 'Business' },
            { value: 'first', label: 'First Class' },
          ]}
          {...register('travelClass')}
          error={errors.travelClass?.message}
          required
        />
        <Input
          variant="dark"
          label="Adults"
          type="number"
          min="1"
          defaultValue="1"
          {...register('passengers.adults')}
          error={errors['passengers.adults']?.message}
          required
        />
        <Input
          variant="dark"
          label="Children (2-11 years)"
          type="number"
          min="0"
          defaultValue="0"
          {...register('passengers.children')}
          error={errors['passengers.children']?.message}
          required
        />
        <Input
          variant="dark"
          label="Infants (Under 2 years)"
          type="number"
          min="0"
          defaultValue="0"
          {...register('passengers.infants')}
          error={errors['passengers.infants']?.message}
          required
        />
      </div>
      <Textarea
        variant="dark"
        label="Additional Message (Optional)"
        rows={4}
        placeholder="Any special requirements or preferences..."
        {...register('message')}
        error={errors.message?.message}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
}

