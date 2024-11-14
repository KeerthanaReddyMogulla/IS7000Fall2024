import React from 'react';
import PageLayout from '../../components/PageLayout';

function Contact() {
  return (
    <PageLayout title="Contact Us">
      <h2 className="text-xl font-bold mt-4">Get in Touch</h2>
      <p className="mt-2">We'd love to hear from you! Please fill out the form below to contact us.</p>

      <form className="mt-6 space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Send Message</button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Company Information</h3>
        <p>Market Insyte</p>
        <p>123 Market Street</p>
        <p>City, Country 12345</p>
        <p>Email: support@marketinsyte.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </PageLayout>
  );
}

export default Contact;
