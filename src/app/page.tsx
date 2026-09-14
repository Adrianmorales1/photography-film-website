import './ditto.css';
import SiteNav from './SiteNav';
const tiles=[['/photography','PHOTOGRAPHY','See. Create. Preserve.'],['/production','FILM & PRODUCTION','Move with purpose. Tell the story.'],['/hines','ABOUT','The person behind the lens.'],['/contact','CONTACT','Let’s create something together.']];
export default function Page(){return <>
<SiteNav />
<main className="layout-home">
<section className="layout-hero"><div><h1>INSPIRED,<br/>EVERYWHERE</h1><p>Photographer • Filmmaker • Educator</p><a className="layout-outline-button" href="/hines">Discover the studio</a></div></section>
<section className="layout-tiles" aria-label="Explore the studio">{tiles.map(([href,title,description])=><a key={href} href={href}><h2>{title}</h2><hr/><p>{description}</p></a>)}</section>
<section className="layout-mailing"><h2>Join the Mailing List</h2><p>Stay updated with our latest content &amp; events, by joining our list!</p><a className="layout-outline-button" href="#layout-preview-unavailable">Stay Up-To-Date →</a></section>
</main><footer className="layout-home-footer">Your photography &amp; film studio</footer></>}
