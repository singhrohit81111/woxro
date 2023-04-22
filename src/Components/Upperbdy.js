import React from 'react';
import Tea from './Tea.jpg'
import './style.scss'

export default function Upperbdy() {
  return (
    <div className="ub" style={{ minHeight: `80vh`, backgroundImage: `url(${Tea})`, backgroundSize: "100vw 80vh" }}>
      <div className="ch1">Kerala's Leading Web Design Company</div>
      <div className="ch2">Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</div>
    </div>
  )
}
