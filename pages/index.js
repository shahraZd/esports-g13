import Image from "next/image";
import Link from "next/link";

import styles from "../Styles/page.module.css";
import "../Styles/home.css";

import hero from "../assets/wallpaper-g13-esports-tunisie-11.webp";

import instagram from "../assets/insta.webp";
import discord from "../assets/discord.webp";
import facebook from "../assets/facebook.webp";

import tft from "../assets/TFT_Set4_KeyArtV2-1.jpg";

import publica from "../assets/publica-white-sponso.png";
import sponso from "../assets/sponso.png";
import navicom from "../assets/navicom.png";


export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <section className="hero">
          <div className="bg">
            {/* <Image
            src={hero}
            alt="g13-esports-tunisie"
            layout="fill"
            objectFit="cover"
            quality={100}
            object-position="left top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
          </div>
        </section>
        <section className="intro">
          <video controls preload="none">
            <source
              src="https://youtu.be/O9R-fwWeXws?si=-919XM7Q0pgrvlZO"
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="social">
          <Link href="https://www.instagram.com/esports_g13/">
            <Image
              className="social_icon"
              src={instagram}
              alt="g13-esports-tunisia-instagram"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <Link href="https://discord.com/invite/xmVCqtJGZA">
            <Image
              className="social_icon"
              src={discord}
              alt="g13-esports-tunisia-discord"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <Link href="https://www.facebook.com/eSportsg13">
            <Image
              className="social_icon"
              src={facebook}
              alt="g13-esports-tunisia-facebook"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </section>

        <section className="desc">
          <h1>Weekly Esports Tournaments</h1>
          <p>
            Welcome to Gotei13, Tunisia's ultimate gaming arena! Dive into our
            Weekly Esports Tournaments and battle in epic games like LoL and
            Valorant. Unleash your skills, dominate the competition, and claim
            your glory. The stage is set. Are you ready to become a legend?
          </p>
        </section>

        <section className="gallery">
          <Image
            src={tft}
            alt="g13-esports-tunisia-tft"
            width={150}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </section>

        <section className="about">
          <div>
            <h1>About Us</h1>
            <p>
              <span>
                Gotei 13 is a company specializing in organizing online and LAN
                tournaments.
              </span>
              Our mission is to maintain an active community by organizing
              esports tournaments throughout the year.
            </p>
            <p>
              We are a team of gamers who believe in the power of tournaments to
              bring people together and create a strong community.
            </p>
            <p>
              We are proud to
              <span> organize high-quality esports events </span> that are
              accessible to everyone, regardless of skill level.
            </p>
          </div>
          <div>
            <h1>OUR VALUES</h1>
           <p>
                <span>Passion:</span> We are passionate about video games and we
                want to share this passion with the community.
                </p>
                <p>
                <span>Inclusion:</span> We want to create a welcoming and
                inclusive space for all players, regardless of their skill level
                or background.
                </p>
              <p>
                <span>Competitiveness:</span> We want to organize competitive
                and challenging tournaments that will challenge the best
                players.
              </p>
              <p>
                <span>Community:</span> We want to create a strong community of
                players who support each other and share their passion for video
                games.
              </p>
            
          </div>
        </section>
        <section className="achievments">
          <h1>OUR TOURNAMENTS</h1>
          <p>
            We organize a variety of tournaments
            <span> for different video games</span>, including:
          </p>
          <ul className="genre">
            <li>FPS GAMES</li>
            <li>RTS GAMES</li>
            <li>FIGHTING GAMES</li>
            <li>SPORTS GAMES</li>
          </ul>
          <p>
            We also offer tournaments for all skill levels, from beginners to
            professional players.
          </p>
        </section>
        <section className="partners">
          <h3>Our Partners</h3>
          <div className="sponsors">
            <Image
              src={publica}
              alt="g13-esports-tunisia-tft"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src={sponso}
              alt="g13-esports-tunisia-tft"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src={navicom}
              alt="g13-esports-tunisia-tft"
              width={150}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
