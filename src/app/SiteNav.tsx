"use client";
import {useState} from "react";
import {usePathname} from "next/navigation";
const links = [["/","Home"],["/photography","Photography"],["/production","Film & Production"],["/hines","About"],["/contact","Contact"]];
export default function SiteNav(){
 const [open,setOpen]=useState(false); const path=usePathname();
 return <header className={"studio-header"+(path==='/'?' studio-header-home':'')}>
  <a className="studio-wordmark" href="/">YOUR NAME<span>PHOTOGRAPHY & FILM</span></a>
  <button className="studio-menu" aria-expanded={open} aria-controls="studio-nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button>
  <nav id="studio-nav" aria-label="Main navigation" className={open?'is-open':''}>{links.map(([href,label])=><a key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
 </header>;
}
