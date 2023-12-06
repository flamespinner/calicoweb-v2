import Image from 'next/image'
import Accordion from '../components/accordion'

export default function Aboutus() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div className="px-[200px] pt-[30px] pb-20 text-left">
        <h1 className="text-4xl font-bold ">About Us</h1>
        <p>Calico County RP is a growing community centered around 1889 western roleplay through our RedM server. Our main goal is to build a community focused on having quality roleplay and positive interactions and experiences for both new and veteran RPers. We want to provide a place where players are provided the tools and support to be able to tell the story you want and to have fun doing so. At the base level, we want a server that is easy for newcomers to both RP and RedM alike to be able to learn and get their toes wet, a place where all feel welcome, and a county that has unique tools that allow players to tell the story they want to. </p>
        
        <h1 className='mt-10 text-4xl font-bold'>F.A.Q</h1>
        <Accordion 
          title="What VOIP Service does Calico County use?"
          content="We use PMA-Voice for communications in county. No need for Teamspeak or Saltychat to talk to others in county" 
        />
        <Accordion 
          title="Is Calico County RP Whitelisted/Allowlisted?" 
          content="Calico County is not Whitelisted however we require you to be in our discord to be able to connect to the server" 
        />
        <Accordion 
          title="How can I support Calico County RP?" 
          content="We're greatful for any support! If you'd like to contribute, please see the sponsor-calico channel in our discord. Remember, support is always appreciated, but never obligatory. " 
        />
        <Accordion 
          title="What Framework does Calico County RP run on?" 
          content="We currently use VORP Core for the framework of the County. Our developers are hard at work building and iterating on the framework to make it our own, and to work with our community " 
        />
        <Accordion 
          title="How do I connect to Calico County RP" 
          content="You will need to be in our Discord otherwise you will not be able to join. Once you are in our discord, launch RedM and press your F8 key and enter: connect server.calicocountyrp.com"
        />
        <Accordion 
          title="Is the server available on Xbox or PS4?" 
          content="No. Unfortunatly RedM does not work with Xbox or PS4." 
        />
        <Accordion 
          title="Is there controller support?" 
          content="RedM and basegame RDO/RdR2 has controller support. Although you can use it in county, we (Calico County) do not suppport it at this time" 
        />
        <Accordion 
          title="How do you download RedM?" 
          content="You can download RedM from https://redm.net" 
        />
      </div>
    </main>
  )
}
