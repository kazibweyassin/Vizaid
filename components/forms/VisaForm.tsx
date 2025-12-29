'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { VisaInquiry } from '@/types';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const visaSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  nationality: z.string().min(2, 'Nationality is required'),
  destination: z.string().min(2, 'Destination is required'),
  visaType: z.string().min(1, 'Visa type is required'),
  travelDate: z.string().min(1, 'Travel date is required'),
  passportNumber: z.string().optional(),
  message: z.string().optional(),
});

type VisaFormData = z.infer<typeof visaSchema>;

const popularDestinations = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Dubai (UAE)',
  'Saudi Arabia', 'South Africa', 'Kenya', 'Tanzania', 'Rwanda',
];

const visaTypes = [
  'Tourist Visa', 'Business Visa', 'Transit Visa', 'Student Visa',
  'Work Visa', 'Family Visit Visa', 'Medical Visa',
];

export default function VisaForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VisaFormData>({
    resolver: zodResolver(visaSchema),
  });

  const onSubmit = async (data: VisaFormData) => {
    setIsSubmitting(true);
    try {
      const inquiryData: VisaInquiry = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        nationality: data.nationality,
        destination: data.destination,
        visaType: data.visaType,
        travelDate: data.travelDate,
        passportNumber: data.passportNumber,
        message: data.message,
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'visa', data: inquiryData }),
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 font-semibold mb-2">Thank you for your inquiry!</div>
        <p className="text-green-700">We'll contact you within 24 hours to assist with your visa application.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          required
        />
        <Input
          label="Nationality"
          {...register('nationality')}
          error={errors.nationality?.message}
          required
        />
        <Select
          label="Destination Country"
          options={popularDestinations.map(dest => ({ value: dest, label: dest }))}
          {...register('destination')}
          error={errors.destination?.message}
          required
        />
        <Select
          label="Visa Type"
          options={visaTypes.map(type => ({ value: type, label: type }))}
          {...register('visaType')}
          error={errors.visaType?.message}
          required
        />
        <Input
          label="Intended Travel Date"
          type="date"
          {...register('travelDate')}
          error={errors.travelDate?.message}
          required
        />
        <Input
          label="Passport Number (Optional)"
          {...register('passportNumber')}
          error={errors.passportNumber?.message}
        />
      </div>
      <Textarea
        label="Additional Information (Optional)"
        rows={4}
        placeholder="Any specific requirements or questions..."
        {...register('message')}
        error={errors.message?.message}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Submitting...' : 'Request Visa Assistance'}
      </Button>
    </form>
  );
}



