'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { TourInquiry } from '@/types';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const tourSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  destination: z.string().min(2, 'Destination is required'),
  tourType: z.enum(['international', 'domestic']),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  groupSize: z.string().min(1),
  preferences: z.string().optional(),
  message: z.string().optional(),
});

type TourFormData = z.infer<typeof tourSchema>;

const internationalDestinations = [
  'Dubai, UAE', 'Paris, France', 'London, UK', 'New York, USA',
  'Tokyo, Japan', 'Bangkok, Thailand', 'Singapore', 'Istanbul, Turkey',
  'Cairo, Egypt', 'Cape Town, South Africa', 'Mauritius', 'Seychelles',
];

const domesticDestinations = [
  'Bwindi Impenetrable Forest (Gorilla Trekking)', 'Queen Elizabeth National Park',
  'Murchison Falls National Park', 'Kibale Forest (Chimpanzee Trekking)',
  'Rwenzori Mountains', 'Lake Bunyonyi', 'Jinja (Source of the Nile)',
  'Kampala City Tour', 'Sipi Falls', 'Kidepo Valley National Park',
];

export default function TourForm({ tourType = 'domestic' }: { tourType?: 'international' | 'domestic' }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedTourType, setSelectedTourType] = useState(tourType);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TourFormData>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      tourType: tourType,
    },
  });

  const watchedTourType = watch('tourType') || selectedTourType;
  const destinations = watchedTourType === 'international' ? internationalDestinations : domesticDestinations;

  const onSubmit = async (data: TourFormData) => {
    setIsSubmitting(true);
    try {
      const inquiryData: TourInquiry = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        destination: data.destination,
        tourType: data.tourType,
        startDate: data.startDate,
        endDate: data.endDate,
        groupSize: parseInt(data.groupSize, 10),
        preferences: data.preferences,
        message: data.message,
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'tour', data: inquiryData }),
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
        <p className="text-green-700">We'll prepare a customized tour package and get back to you within 24 hours.</p>
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
        <Select
          label="Tour Type"
          options={[
            { value: 'domestic', label: 'Domestic (Uganda)' },
            { value: 'international', label: 'International' },
          ]}
          {...register('tourType')}
          error={errors.tourType?.message}
          required
          onChange={(e) => {
            setSelectedTourType(e.target.value as 'international' | 'domestic');
            register('tourType').onChange(e);
          }}
        />
        <Select
          label="Destination"
          options={destinations.map(dest => ({ value: dest, label: dest }))}
          {...register('destination')}
          error={errors.destination?.message}
          required
        />
        <Input
          label="Start Date"
          type="date"
          {...register('startDate')}
          error={errors.startDate?.message}
          required
        />
        <Input
          label="End Date"
          type="date"
          {...register('endDate')}
          error={errors.endDate?.message}
          required
        />
        <Input
          label="Group Size"
          type="number"
          min="1"
          defaultValue="2"
          {...register('groupSize')}
          error={errors.groupSize?.message}
          required
        />
      </div>
      <Textarea
        label="Preferences & Special Requirements (Optional)"
        rows={4}
        placeholder="e.g., accommodation preferences, activities of interest, dietary requirements..."
        {...register('preferences')}
        error={errors.preferences?.message}
      />
      <Textarea
        label="Additional Message (Optional)"
        rows={3}
        placeholder="Any other information you'd like to share..."
        {...register('message')}
        error={errors.message?.message}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Submitting...' : 'Request Tour Quote'}
      </Button>
    </form>
  );
}

