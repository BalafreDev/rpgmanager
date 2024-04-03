'use client'
import React from "react";
import Clock from 'react-live-clock'

export default function MyQuotesSlider() {
  return (
    <div>
      <h3>Il est :</h3>
      <Clock
        format={'h:mm:ssa'}
        style={{fontSize: '1.5em'}}
        ticking={true} />
    </div>
  );
}