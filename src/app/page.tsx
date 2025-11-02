import Image from "next/image";
import s from "./page.module.scss";

import SalahIcon from "@/assets/icons/Salah.svg";
import QuranIcon from "@/assets/icons/Quran.svg";
import DuaIcon from "@/assets/icons/Dua.svg";
import MosqueIcon from "@/assets/icons/Mosque.svg";
import TimeIcon from "@/assets/icons/Time.svg";
import FastIcon from "@/assets/icons/Fast.svg";
import ProfileIcon from "@/assets/icons/Profile.svg";
// Feature
import Calculator from "@/assets/features/Calculator.svg";
import AI from "@/assets/features/AI.svg";
import CrowdSource from "@/assets/features/CrowdSource.svg";
import QiblaDirection from "@/assets/features/QiblaDirection.svg";
import Quran from "@/assets/features/Quran.svg";
import Audio from "@/assets/features/Audio.svg";

const FEATURES = [
  { label: "Real-Time Salah Tracker", icon: SalahIcon },
  { label: "Nearby Mosques", icon: MosqueIcon },
  { label: "Duas", icon: DuaIcon },
  { label: "Fast Tracker", icon: FastIcon },
  { label: "Salah Timings", icon: TimeIcon },
  { label: "Quran", icon: QuranIcon },
  { label: "My Mosques", icon: MosqueIcon },
  { label: "Profile", icon: ProfileIcon },
];

const KEY_FEATURES = [
  {
    label: "Nearby Mosques",
    url: "https://www.mujtamaglobal.com/assets/images/feature01.png",
    description:
      "Find nearby mosques with real-time prayer times and directions, keeping you connected to your local Muslim community.",
  },
  {
    label: "Salah Tracker",
    url: "https://www.mujtamaglobal.com/assets/images/feature02.png",
    description:
      "Track your daily prayers, set reminders, and monitor your progress to build consistency in your worship.",
  },
  {
    label: "Quran",
    url: "https://www.mujtamaglobal.com/assets/images/feature03.png",
    description:
      "Read the complete Quran in Uthmani and Indo-Pak scripts with translations and tafsir for deeper reflection.",
  },
  {
    label: "Duas",
    url: "https://www.mujtamaglobal.com/assets/images/feature04.png",
    description:
      "Access a wide range of authentic daily duas and supplications, including collections from Hisn al-Muslim.",
  },
];

const HOME_SCREEN_OVERVIEW = {
  title: "Home Screen Overview",
  description:
    "Welcome to your personalized Islamic dashboard. Here’s what you’ll find:",
  image:
    "https://www.mujtamaglobal.com/assets/images/home-screen-overview-image.png",
  features: [
    {
      title: "Nearest Mosque & Salah Times",
      description:
        "Instantly view your closest mosque with real-time prayer timings. Follow your favorite masjid to stay updated on upcoming prayers.",
    },
    {
      title: "Islamic Tools at Your Fingertips",
      description:
        "Access core features like Quran, Duas, Hadith, Qibla direction, and a Zakat calculator — all from one place.",
    },
    {
      title: "Stories Section",
      description:
        "A quick access carousel for engaging features like Salah Tracker, Fast Tracker, and more (visually highlighted for ease).",
    },
    {
      title: "Nearby Mosques",
      description:
        "Explore and follow other nearby mosques with just a tap, including distance indicators for easy navigation.",
    },
  ],
};

export const MASJID_DETAIL_OVERVIEW = {
  title: "Masjid Detail Screen Overview",
  image:
    "https://www.mujtamaglobal.com/assets/images/masjid-detail-screen-overview-image.png",
  description:
    "Stay connected to your local mosque with all the essential details in one place. This screen helps you track prayer times, find directions, and manage your mosque preferences with ease.",
  features: [
    {
      title: "Live Prayer Countdown",
      description:
        "At the top, see how much time is left until the next prayer. This real-time countdown helps you stay on track throughout the day.",
    },
    {
      title: "Masjid Information",
      description:
        "Get full details of the mosque including name, address, and distance from your current location. Tap “Direction” to navigate or “Following” to keep it in your favorites.",
    },
    {
      title: "Daily Prayer Timings",
      description:
        "Check all five daily prayer times along with Jummah. The currently active or next prayer is clearly highlighted for quick reference.",
    },
  ],
};
export const MY_MOSQUE_SCREEN_OVERVIEW = {
  title: "My Mosques Screen Overview",
  description:
    "Easily manage and access the mosques you follow for real-time Salah updates, directions, and personalized prayer tracking.",
  features: [
    {
      title: "Followed Mosques List",
      description:
        "This screen shows all the mosques you’ve chosen to follow, helping you stay connected to your preferred locations.",
    },
    {
      title: "Mosque Info Cards",
      description:
        "Each mosque card displays the name, address, and distance from your current location for quick access to relevant details.",
    },
    {
      title: "One-Tap Actions",
      description:
        "Use the “Following” button to manage your connection or navigate to detailed mosque pages for prayer timings and directions.",
    },
  ],
  image:
    "https://www.mujtamaglobal.com/assets/images/masjid-detail-screen-overview-image.png",
};

export const SALAH_SCREEN_OVERVIEW = {
  title: "Salah Tracker Screen Overview",
  description:
    "Build a consistent prayer habit by tracking your daily Salah in a simple and organized way. This screen helps you stay accountable with just a few taps.",
  image:
    "https://www.mujtamaglobal.com/assets/images/salah-tracker-overview-image.png",
  features: [
    {
      title: "Prayer Check-in Prompt",
      description:
        "At the top, you’ll see a quick question like “Have you prayed Maghrib?” — tap ‘Yes’ to instantly log your prayer.",
    },
    {
      title: "Calendar View",
      description:
        "Scroll through the calendar to select any date and view or update your prayer history. It helps you track your progress over time.",
    },
    {
      title: "Daily Salah Checklist",
      description:
        "Each day shows all five prayers. Tap to mark them as completed and visually track which ones you've prayed.",
    },
    {
      title: "Current Day Highlight",
      description:
        "The current date is highlighted so you always know which day you’re logging for.",
    },
  ],
};

const UPCOMING_FEATURES = {
  title: "Upcoming Features",
  features: [
    {
      label: "Qibla",
      icon: QiblaDirection,
    },
    { label: "Iqra AI", icon: AI },
    { label: "Zakat Calculator", icon: Calculator },
    { label: "Fundraiser Drive", icon: CrowdSource },
    { label: "Hadith", icon: Quran },
    { label: "Audiobook", icon: Audio },
  ],
};

const HomePage = () => {
  return (
    <div className={s.root}>
      {/* ---------- HERO ---------- */}
      <section className={s.hero}>
        <div className={s.content}>
          <h1 className={s.title}>
            Your All In One <br /> Islamic Companion
          </h1>
          <p className={s.subtitle}>
            Mujtama Global helps Muslims stay connected to their faith — with
            real-time Salah tracking, accurate prayer times, and nearby mosque
            locations wherever you are.
          </p>
          <div className={s.features}>
            {FEATURES.map((feature) => (
              <span key={feature.label} className={s.feature}>
                <Image
                  src={feature.icon}
                  alt={feature.label}
                  width={18}
                  height={18}
                  className={s.heroImage}
                />
                {feature.label}
              </span>
            ))}
          </div>
        </div>
        <div className={s.heroImageWrapper}>
          <Image
            src="https://www.mujtamaglobal.com/assets/images/hero-image.png"
            width={380}
            height={480}
            alt="show-case-img"
            className={s.heroImage}
          />
        </div>
      </section>

      {/* ---------- KEY FEATURES ---------- */}
      <section className={s.keyFeatures}>
        <h3>Faith Meets Convenience</h3>
        <p>Stay connected to your faith wherever you are, whenever you need.</p>
        <h4>Explore Our Key Features</h4>
        <div className={s.cards}>
          {KEY_FEATURES.map((item) => (
            <div key={item.label} className={s.card}>
              <Image
                src={item.url}
                alt={item.label}
                height={200}
                width={200}
                className={s.cardImage}
              />
              <h5>{item.label}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 1 ---------- */}
      <section className={s.overview}>
        <div className={s.content}>
          <p className={s.overviewTitle}>{HOME_SCREEN_OVERVIEW.title}</p>
          <p className={s.overviewDescription}>
            {HOME_SCREEN_OVERVIEW.description}
          </p>
          <div className={s.overviewItems}>
            {HOME_SCREEN_OVERVIEW.features.map(
              ({ title, description }, index) => (
                <div key={index} className={s.overviewItem}>
                  <p className={s.itemTitle}>{title}</p>
                  <p className={s.itemDescription}>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className={s.imageContainer}>
          <img
            src={HOME_SCREEN_OVERVIEW.image}
            alt={HOME_SCREEN_OVERVIEW.title}
            className={s.overviewImage}
          />
        </div>
      </section>
      {/* ---------- 2 ---------- */}
      <section className={s.overview}>
        <div className={s.content}>
          <p className={s.overviewTitle}>{MASJID_DETAIL_OVERVIEW.title}</p>
          <p className={s.overviewDescription}>
            {MASJID_DETAIL_OVERVIEW.description}
          </p>
          <div className={s.overviewItems}>
            {MASJID_DETAIL_OVERVIEW.features.map(
              ({ title, description }, index) => (
                <div key={index} className={s.overviewItem}>
                  <p className={s.itemTitle}>{title}</p>
                  <p className={s.itemDescription}>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className={s.imageContainer}>
          <img
            src={MASJID_DETAIL_OVERVIEW.image}
            alt={MASJID_DETAIL_OVERVIEW.title}
            className={s.overviewImage}
          />
        </div>
      </section>
      {/* ---------- 3 ---------- */}
      <section className={s.overview}>
        <div className={s.content}>
          <p className={s.overviewTitle}>{SALAH_SCREEN_OVERVIEW.title}</p>
          <p className={s.overviewDescription}>
            {SALAH_SCREEN_OVERVIEW.description}
          </p>
          <div className={s.overviewItems}>
            {SALAH_SCREEN_OVERVIEW.features.map(
              ({ title, description }, index) => (
                <div key={index} className={s.overviewItem}>
                  <p className={s.itemTitle}>{title}</p>
                  <p className={s.itemDescription}>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className={s.imageContainer}>
          <img
            src={SALAH_SCREEN_OVERVIEW.image}
            alt={SALAH_SCREEN_OVERVIEW.title}
            className={s.overviewImage}
          />
        </div>
      </section>
      {/* ---------- 4 ---------- */}
      <section className={s.overview}>
        <div className={s.content}>
          <p className={s.overviewTitle}>{MY_MOSQUE_SCREEN_OVERVIEW.title}</p>
          <p className={s.overviewDescription}>
            {MY_MOSQUE_SCREEN_OVERVIEW.description}
          </p>
          <div className={s.overviewItems}>
            {MY_MOSQUE_SCREEN_OVERVIEW.features.map(
              ({ title, description }, index) => (
                <div key={index} className={s.overviewItem}>
                  <p className={s.itemTitle}>{title}</p>
                  <p className={s.itemDescription}>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className={s.imageContainer}>
          <img
            src={MY_MOSQUE_SCREEN_OVERVIEW.image}
            alt={MY_MOSQUE_SCREEN_OVERVIEW.title}
            className={s.overviewImage}
          />
        </div>
      </section>
      {/* Upcoming Features */}
      <section className={s.upcomingFeatures}>
        <p className={s.title}>Upcoming Features</p>
        <div className={s.features}>
          {UPCOMING_FEATURES.features.map((feature) => (
            <div key={feature.label} className={s.feature}>
              <div className={s.imageContainer}>
                <Image
                  src={feature.icon}
                  height={80}
                  width={80}
                  alt={feature.label}
                />
              </div>

              <span className={s.featureLabel}>{feature.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
