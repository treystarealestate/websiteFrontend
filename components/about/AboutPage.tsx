import { AboutBanner } from '@/components/about/AboutBanner';
import { CeoMessage } from '@/components/about/CeoMessage';
import { MeetTheTeam } from '@/components/about/MeetTheTeam';
import { SetUsApart } from '@/components/about/SetUsApart';
import { VisionMission } from '@/components/about/VisionMission';
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
