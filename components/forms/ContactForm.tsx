'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { ContactForm as ContactFormType } from '@/types';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  'General Inquiry',
  'Air Ticketing',
  'Visa Assistance',
  'Tour Booking',
  'Customer Service',
  'Partnership',
  'Other',
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const contactData: ContactFormType = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: contactData }),
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
        <div className="text-green-400 font-semibold mb-2">Message sent successfully!</div>
        <p className="text-white/70">We&apos;ll get back to you as soon as possible.</p>
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
        <Select
          variant="dark"
          label="Subject"
          options={subjects.map(subject => ({ value: subject, label: subject }))}
          {...register('subject')}
          error={errors.subject?.message}
          required
        />
      </div>
      <Textarea
        variant="dark"
        label="Message"
        rows={6}
        placeholder="Please tell us how we can help you..."
        {...register('message')}
        error={errors.message?.message}
        required
      />
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}



