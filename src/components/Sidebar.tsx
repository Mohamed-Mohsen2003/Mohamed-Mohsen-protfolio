import { useState } from 'react';
import Image from 'next/image';
import { profile, socialLinks } from '../content/portfolio';
import { Icon } from './Icon';

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={`sidebar${expanded ? ' active' : ''}`}
      aria-label="Profile and contact details"
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/Mohamed-Mohsen-protfolio/assets/images/personal image.jpg"
            style={{ borderRadius: 10 }}
            alt="Mohamed Mohsen"
            width={584}
            height={692}
            unoptimized
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>
          <p className="title">{profile.title}</p>
        </div>
        <button
          className="info_more-btn"
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="profile-contacts"
          aria-label={expanded ? 'Hide contact details' : 'Show contact details'}
        >
          <span>{expanded ? 'Hide Contacts' : 'Show Contacts'}</span>
          <Icon name="chevron-down" />
        </button>
      </div>
      <div className="sidebar-info_more" id="profile-contacts">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${profile.email}`} className="contact-link" title={profile.email}>
                {profile.email}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a
                href={profile.whatsapp}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.phone}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-08-30">August 30, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{profile.location}</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          {socialLinks.map((link) => (
            <li key={link.label} className="social-item">
              <a
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Icon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
