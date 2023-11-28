import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div className="relative flex place-items-left after:absolute z-[-1]">
        <h1>About Calico County</h1>
        <p>Calico County RP is a growing community centered around 1899 western roleplay through our RedM server. Our main goal is to build a community focused on having quality roleplay and positive interactions and experiances for both new and veteran RPers through providing the tools and support to be able to tell the story you want and to have fun doing so.  </p>
      </div>
    </main>
  )
}
