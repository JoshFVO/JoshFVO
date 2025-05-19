import {
  motion,
} from "framer-motion";




interface GalleryProps {
 setArea: React.Dispatch<React.SetStateAction<string>>;
}

export const Gallery: React.FC<GalleryProps> = ({ setArea }) => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Gallery
      </motion.h1>
      <div onClick={() => setArea("singapore")}>
        <ScheduleItem title="Singapore" date="July 2024" location="8 Images" />
      </div>
      <div onClick={() => setArea("malaysia")}>
        <ScheduleItem title="Malaysia" date="July 2024" location="5 Images" />
      </div>
     
    </section>
  );
};

type ScheduleItemProps = {
  title: string;
  date: string;
  location: string;
};

const ScheduleItem = ({ title, date, location }: ScheduleItemProps) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex items-center justify-between border-b border-zinc-800 px-3 py-9 hover:cursor-pointer hover:bg-zinc-800/50 transition-colors duration-300 ease-in-out"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
      </div>
    </motion.div>
  );
};
