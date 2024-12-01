import { AboutBanner } from '@/components/about-us/AboutBanner';
import { CeoMessage } from '@/components/about-us/CeoMessage';
import { MeetTheTeam } from '@/components/about-us/MeetTheTeam';
import { SetUsApart } from '@/components/about-us/SetUsApart';
import { VisionMission } from '@/components/about-us/VisionMission';
import React from 'react';

export default function Page({ teamData }: { teamData: any }) {
  return (
    <main>
      <AboutBanner />
      <SetUsApart />
      <VisionMission />
      <CeoMessage />
      <MeetTheTeam teamData={teamData}/>
    </main>
  );
}
