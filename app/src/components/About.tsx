import { aboutParagraphs, services } from '../data/portfolio';
import { Icon } from './Icon';

export function About() {
  return <>
    <section className="about-text">{aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
    <section className="service" aria-labelledby="services-title">
      <h3 className="h3 service-title" id="services-title">What I'm Doing</h3>
      <ul className="service-list">{services.map(service => <li className="service-item" key={service.title}>
        <div className="service-icon-box">{service.image ? <img src={`./assets/images/${service.image}`} alt="" width="40" /> : <Icon name={service.icon!} />}</div>
        <div className="service-content-box"><h4 className="h4 service-item-title">{service.title}</h4><p className="service-item-text">{service.text}</p></div>
      </li>)}</ul>
    </section>
  </>;
}
