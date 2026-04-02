import { AboutBanner } from '@/components/about/AboutBanner';
import { CeoMessage } from '@/components/about/CeoMessage';
import { TeamMessage } from '@/components/about/TeamMessage';
import { MeetTheTeam } from '@/components/about/MeetTheTeam';
import { SetUsApart } from '@/components/about/SetUsApart';
import { VisionMission } from '@/components/about/VisionMission';
import React from 'react';

export default function Page({ teamData }: { teamData: any }) {
  return (
    <main className='secondaryClr'>
      {/* <AboutBanner /> */}
      {/* <AboutBanner /> */}
      <CeoMessage />
      <TeamMessage />
      <SetUsApart />
      <VisionMission />
     
      <MeetTheTeam/>
    </main>
  );
}
