"use client";

import Image from "next/image";

const ELLIPSE_SRC = "/images/Ellipse 52.svg";
const EVENT_LIST_BASE = "/events/eventList";

const EVENT_IDS = [1, 2, 3, 4, 5 ,6 , 7];

type EventCardProps = {
  eventId: number;
};

function EventCard({ eventId }: EventCardProps) {
  const eventImageSrc = `${EVENT_LIST_BASE}/${eventId}.svg`;
  return (
    <div className="relative flex-shrink-0 w-[50vh] h-[50vh] flex items-center justify-center">
      {/* Background: Ellipse 52 */}
      <Image
        src={ELLIPSE_SRC}
        alt=""
        width={256}
        height={256}
        className="absolute inset-0 w-full h-full object-contain"
      />
      {/* Foreground: event list image */}
      <div className="relative z-10 w-[85%] h-[85%] flex items-center justify-center">
        <Image
          src={eventImageSrc}
          alt={`Event ${eventId}`}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

type EventSectionProps = {
  /** When true, section fills parent height instead of 100vh (e.g. when placed between heading and footer) */
  fillParent?: boolean;
};

export default function EventSection({ fillParent }: EventSectionProps = {}) {
  return (
    <section
      className={`w-full overflow-x-auto scrollbar-hide flex items-center justify-start ${fillParent ? "h-full min-h-0 flex-1" : "min-h-screen h-screen"}`}
    >
      <div className="flex flex-row gap-8 justify-start items-center flex-nowrap flex-shrink-0 px-8 min-w-min">
        {EVENT_IDS.map((id) => (
          <EventCard key={id} eventId={id} />
        ))}
      </div>
    </section>
  );
}
