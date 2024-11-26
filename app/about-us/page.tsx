import { AboutBanner } from '@/components/about-us/AboutBanner'
import { SetUsApart } from '@/components/about-us/SetUsApart'
import { VisionMission } from '@/components/about-us/VisionMission'
import React from 'react'

export default function page() {
  return (
    <main>
        <AboutBanner />
        <SetUsApart />
        <VisionMission />
    </main>
  )
}
