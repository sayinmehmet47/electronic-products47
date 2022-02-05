import React from "react";
import { Chrono } from "react-chrono";
import { MdPayment } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FcAutomatic } from "react-icons/fc";

export default function Timeline() {
  const items = [
    {
      title: "Payment",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "Preparing",
      cardTitle: "Preparing",
      cardSubtitle: ``,
      cardDetailedText: `Your product will be delivered at least 10 days.`,
    },
    {
      title: "On way",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
                Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
                On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
    },
    {
      title: "Delivered",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
              Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
              On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
    },
  ];

  return (
    <div
      className=""
      style={{
        maxWidth: "800px",
        height: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
      }}
    >
      <Chrono
        items={items}
        mode="HORIZONTAL"
        activeItemIndex={1}
        hideControls
        disableAutoScrollOnClick={true}
        disableClickOnCircle={true}
      >
        <div className="chrono-icons">
          <div className="text-2xl">
            <MdPayment />
          </div>
          <div className="text-2xl">
            <FcAutomatic />
          </div>
          <div className="text-2xl">
            <RiTakeawayFill />
          </div>
          <div className="text-2xl">
            <AiOutlineDeliveredProcedure />
          </div>
        </div>
      </Chrono>
    </div>
  );
}
