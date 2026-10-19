import { aboutParagraphs, services } from '../content/portfolio';
import Image from 'next/image';
import { ServiceIcon } from './ServiceIcon';

export function About() {
  return (
    <>
      <section className="about-text">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section className="service" aria-labelledby="services-title">
        <h3 className="h3 service-title" id="services-title">
          What I&apos;m Doing
        </h3>
        <ul className="service-list">
          {services.map((service) => (
            <li className="service-item" key={service.title}>
              <div className="service-icon-box">
                {service.image !== undefined ? (
                  <Image
                    src={`/mohamed-mohsen-portfolio/assets/images/${service.image}`}
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                  />
                ) : (
                  <ServiceIcon name={service.icon} />
                )}
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
