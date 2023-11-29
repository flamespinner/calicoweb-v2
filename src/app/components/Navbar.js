import Link from 'next/link'
import "../globals.css";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
        <nav className="fixed w-full h-24 bg-transparent">
          <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href="/">
              <Image
                className="relative"
                src="/cclogomark.png"
                alt="Calico Logo"
                width={85}
                height={85}
                priority
              />
            </Link>
            <div>
              <ul className="hidden sm:flex">
                <Link href="/">
                  <li className='ml-10 uppercase hover:border-b text-xl'>Home</li>
                </Link>
                <Link href="/aboutus">
                  <li className='ml-10 uppercase hover:border-b text-xl'>About Us</li>
                </Link>
                <Link href="https://rules.calicocountyrp.com/">
                  <li className='ml-10 uppercase hover:border-b text-xl'>Rules</li>
                </Link>
                <Link href="/keybinds">
                  <li className='ml-10 uppercase hover:border-b text-xl'>Keybinds</li>
                </Link>
{/*                 <Link href="https://core.calicocountyrp.com">
                  <li className='ml-10 uppercase hover:border-b text-xl'>Core</li>
                </Link> */}
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}
