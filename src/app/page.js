import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-sm:p-7 max-sm:pt-20 bg-black/20 z-[-1]">
      <div className="relative flex place-items-center after:absolute after:-z-20 after:h-[180px] after:w-[240px] z-[-1]">
        <Image
          className="relative"
          src="/InkRoll.png"
          alt="Welcome to Calico County"
          width={650}
          height={420.5}
          priority
        />
      </div>

      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <a href='https://discord.gg/calicocounty'>Join Us!</a>
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>

      <div className="md:visable lg:visable sm:invisable mb-32 grid lg:mb-0 lg:grid-cols-4 py-9 md:mb-0 md:gird-cols-4 md:py-9">
        <a
            href="https://www.tiktok.com/@calicocountyrp"
            className="group px-5 py-4 transition-colors hidden md:block"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="hidden md:block relative"
            src="/TikTok-Social-Icon-Mono-White.svg"
            alt="Welcome to Calico County"
            width={30}
            height={30}
            priority
          />
          </a>

          <a
            href="https://discord.com/invite/calicocounty"
            className="group px-5 py-4 transition-colors hidden md:block"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="hidden md:block relative"
            src="/discord-logo-white.c4634138.svg"
            alt="Welcome to Calico County"
            width={50}
            height={50}
            priority
          />
          </a>

          <a
            href="https://twitter.com/calicocountyrp"
            className="group px-5 py-4 transition-colors hidden md:block"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="hidden md:block relative"
            src="/twitter-logo-white.23e6bb64.svg"
            alt="Welcome to Calico County"
            width={50}
            height={50}
            priority
          />
          </a>

          <a
            href="https://www.twitch.tv/calicocountyrp"
            className="group px-5 py-4 transition-colors hidden md:block"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="hidden md:block relative"
            src="/TwitchGlitchWhite.svg"
            alt="Welcome to Calico County"
            width={35}
            height={35}
            priority
          />
        </a> 
      </div>
    </main>
  )
}
