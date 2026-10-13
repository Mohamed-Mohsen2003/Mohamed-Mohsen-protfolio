'use client';

import { useState } from 'react';
import { profile } from '../content/portfolio';
import { Icon } from './Icon';

export interface ContactFields {
  fullname: string;
  email: string;
  message: string;
}
export function isContactValid(fields: ContactFields) {
  return Boolean(
    fields.fullname.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()) &&
    fields.message.trim(),
  );
}

export function Contact() {
  const [fields, setFields] = useState<ContactFields>({ fullname: '', email: '', message: '' });
  const valid = isContactValid(fields);
  const change = (field: keyof ContactFields, value: string) =>
    setFields((current) => ({ ...current, [field]: value }));

  return (
    <>
      <section className="mapbox" aria-label="Location in Maadi, Cairo">
        <figure>
          <iframe
            title="Map showing Corniche El Maadi, Cairo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.223731797404!2d31.232794475341986!3d29.972999574959676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847bedad2429d%3A0x38fa98ce955cd856!2sCorniche%20El%20Maadi%2C%20Dar%20El%20Salam%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1707666880739!5m2!1sen!2seg"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </figure>
      </section>
      <section className="contact-form" aria-labelledby="contact-form-title">
        <h3 className="h3 form-title" id="contact-form-title">
          Contact Form
        </h3>
        <form
          action={`https://formsubmit.co/${profile.email}`}
          method="POST"
          className="form"
          onSubmit={(event) => {
            if (!valid) event.preventDefault();
          }}
        >
          <div className="input-wrapper">
            <div>
              <label className="sr-only" htmlFor="contact-name">
                Full name
              </label>
              <input
                type="text"
                name="fullname"
                id="contact-name"
                className="form-input"
                placeholder="Full name"
                autoComplete="name"
                value={fields.fullname}
                onChange={(event) => change('fullname', event.target.value)}
                required
                maxLength={120}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="contact-email">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="contact-email"
                className="form-input"
                placeholder="Email address"
                autoComplete="email"
                value={fields.email}
                onChange={(event) => change('email', event.target.value)}
                required
                maxLength={254}
              />
            </div>
          </div>
          <label className="sr-only" htmlFor="contact-message">
            Your message
          </label>
          <textarea
            name="message"
            id="contact-message"
            className="form-input"
            placeholder="Your message"
            value={fields.message}
            onChange={(event) => change('message', event.target.value)}
            required
            maxLength={5000}
          />
          <div className="form-buttons">
            <button className="form-btn" type="submit" disabled={!valid}>
              <Icon name="paper-plane-outline" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
