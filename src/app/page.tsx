import s from "./page.module.scss";

const FEATURES = [
  { label: "Real time Salah Tracker" },
  { label: "Nearby Mosques" },
  { label: "Duas" },
  { label: "Fast Tracker" },
  { label: "Salah Tracker" },
  { label: "Quran" },
  { label: "My Mosques" },
  { label: "Profile" },
];

const KEY_FEATURS = [
  {
    label: "Nearby Mosques",
    description:
      "ind nearby mosques with real-time prayer times and directions, making it easy to stay connected to your local Muslim community.",
  },
  {
    label: "Salah Tracker",
    description:
      "Track your daily prayers, get helpful reminders, and monitor your progress to build consistency in your worship.",
  },
  {
    label: "Quran",
    description:
      "Read the full Quran in Uthmani and Indo-Pak scripts with clear translations and tafsir for deeper reflection and understanding.",
  },
  {
    label: "Dua",
    description:
      "Access a wide collection of authentic daily duas and supplications, including those from Hisn al-Muslim.",
  },
];
const HomePage = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Your All-in-one Islamic Companion</h1>
      <p>
        Mujtama Global is a comprehensive Islamic app designed to help Muslims
        stay connected to their faith. With real-time Salah tracking, accurate
        prayer times, and nearby mosque locations based on your current
        position, you’ll never miss a prayer.
      </p>
      <div className={s.features}>
        {FEATURES.map((feature) => (
          <span key={feature.label} className={s.feature}>
            {feature.label}
          </span>
        ))}
      </div>
      <h3>Faith meets convenience</h3>
      <p>Stay connected to your faith wherever you are, whenever you need</p>
      <h4>Explore Our Key Features</h4>
      <p>
        Key features in the app that wil help you to connected to your faith
      </p>
    </div>
  );
};

export default HomePage;
