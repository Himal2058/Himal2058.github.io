import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogHub } from '@/components/BlogHub';
import { CtaBand } from '@/components/CtaBand';

export const metadata = {
  title: 'Electronics Repair and Buying Guides | Himal Electronics',
  description:
    'Find practical answers about phone and electronics repair, product care, accessories and smart-home setup from Himal Product and Services in Morang, Nepal.'
};

export default function BlogHubPage() {
  return (
    <>
      <h1>Blog</h1>

      <div className="pb-12 md:pb-16">
        <div className="container-page pt-6">
          <Breadcrumbs items={[{ name: 'Guides', url: '/blog' }]} />
        </div>

        <BlogHub />

        <div className="mt-8">
          <CtaBand
            title="Question the guides do not answer?"
            description="Send the device model and the symptom. You will get an answer from someone at the bench."
            whatsappMessage="Hello Himal Product & Services, I read a guide on your website and have a question: "
          />
        </div>
      </div>
    </>
  );
}
