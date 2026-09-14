"use client";
import {useEffect,useState} from "react";
export default function PreviewGuard(){
 const [message,setMessage]=useState('');
 useEffect(()=>{
  const submit=(event:Event)=>{event.preventDefault();setMessage('Preview only — no message was sent.');};
  const click=(event:MouseEvent)=>{const link=(event.target as Element).closest('a');if(link?.getAttribute('href')==='#layout-preview-unavailable'){event.preventDefault();setMessage('This link is outside the five-page layout preview.');}};
  document.addEventListener('submit',submit);document.addEventListener('click',click);
  return ()=>{document.removeEventListener('submit',submit);document.removeEventListener('click',click);};
 },[]);
 return message?<div className="preview-notice" role="status">{message}<button aria-label="Dismiss notice" onClick={()=>setMessage('')}>×</button></div>:null;
}
