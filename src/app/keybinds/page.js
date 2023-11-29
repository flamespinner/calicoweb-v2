import Image from 'next/image'
/* import styles from './page.module.css'
 */
export default function Keybinds() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div className="px-6 py-5 text-left">
        <h1 className="mb-3 text-5xl font-bold ">Keybinds, Commands & Helpful Phrases</h1>
        <div className = "Keybinds">
          <div id="tablecontainer">
              <div id="keytable">
                  <table>
                      <tr>
                          <th>Key</th>
                          <th>Action</th>
                      </tr>
                      <tr>
                          <td>W</td>
                          <td>Walk Forward</td>
                      </tr>
                      <tr>
                          <td>A</td>
                          <td>Walk Left</td>
                      </tr>
                      <tr>
                          <td>S</td>
                          <td>Walk Backwards</td>
                      </tr>
                      <tr>
                          <td>D</td>
                          <td>Walk Right</td>
                      </tr>
                      <tr>
                          <td>]</td>
                          <td>Voice Range</td>
                      </tr>
                      <tr>
                          <td>N</td>
                          <td>Push to Talk</td>
                      </tr>
                      <tr>
                          <td>M</td>
                          <td>Map</td>
                      </tr>
                      <tr>
                          <td>U</td>
                          <td>Interact</td>
                      </tr>
                      <tr>
                          <td>TAB</td>
                          <td>Holster Gun</td>
                      </tr>
                      <tr>
                          <td>Hold TAB</td>
                          <td>Weapon/Item Wheel</td>
                      </tr>
                      <tr>
                          <td>F6</td>
                          <td>Radial Menu</td>
                      </tr>
                      <tr>
                          <td>SPACE</td>
                          <td>Jump</td>
                      </tr>
                      <tr>
                          <td>J</td>
                          <td>Call Wagon</td>
                      </tr>
                      <tr>
                          <td>H</td>
                          <td>Call Horse</td>
                      </tr>
                      <tr>
                          <td>I</td>
                          <td>Open Pockets</td>
                      </tr>
                      <tr>
                          <td>Q</td>
                          <td>Take Cover</td>
                      </tr>
                      <tr>
                          <td>Z</td>
                          <td>Rag Doll</td>
                      </tr>
                      <tr>
                          <td>E</td>
                          <td>Take Hostage/Attack</td>
                      </tr>
                      <tr>
                          <td>R</td>
                          <td>Reload</td>
                      </tr>
                      <tr>
                          <td>T</td>
                          <td>Open Chat</td>
                      </tr>
                      <tr>
                          <td>F</td>
                          <td>Punch</td>
                      </tr>
                      <tr>
                          <td>ESC</td>
                          <td>Pause Menu</td>
                      </tr>
                      <tr>
                          <td>L</td>
                          <td>Point Toggle</td>
                      </tr>
                      <tr>
                          <td>X</td>
                          <td>Hands Up</td>
                      </tr>
                      <tr>
                          <td>V</td>
                          <td>View Toggle</td>
                      </tr>
                      <tr>
                          <td>Hold V</td>
                          <td>Cinematic Mode</td>
                      </tr>
                      <tr>
                          <td>L Ctrl</td>
                          <td>Crouch</td>
                      </tr>
                  </table>
              </div>

              <div id="phrasetable">
                  <table>
                      <tr>
                          <th>Word/Phrase</th>
                          <th>Meaning</th>
                      </tr>
                      <tr>
                          <td>Headache</td>
                          <td>Experiencing Lag or Sudden Crash</td>
                      </tr>
                      <tr>
                          <td>Head-Pop</td>
                          <td>Relog</td>
                      </tr>
                      <tr>
                          <td>Take a Nap</td>
                          <td>Logging out with intention of coming back</td>
                      </tr>
                      <tr>
                          <td>Go to Sleep</td>
                          <td>Logging out with intention of not coming back</td>
                      </tr>
                      <tr>
                          <td>Something wrong with your voice</td>
                          <td>Mic Issue/Voice is Choppy</td>
                      </tr>
                      <tr>
                          <td>Something in My Ear</td>
                          <td>Something Wrong With My Audio</td>
                      </tr>
                      <tr>
                          <td>My Ears are Clogged</td>
                          <td>I Can't Hear You</td>
                      </tr>
                      <tr>
                          <td>Storm is Coming</td>
                          <td>Restart is Soon</td>
                      </tr>
                      <tr>
                          <td>Gov. Newspaper</td>
                          <td>Discord (Please use Sparingly)</td>
                      </tr>
                      <tr>
                          <td>Put a Note in Your Pocket</td>
                          <td>Sent You a DM in Discord</td>
                      </tr>
                      <tr>
                          <td>Do Some Gov Paperwork</td>
                          <td>Send in a Ticket</td>
                      </tr>
                      <tr>
                          <td>Send a Telegram</td>
                          <td>Send a IC message to another player</td>
                      </tr>
                      <tr>
                          <td>Fresh off the Boat/Train</td>
                          <td>New to Server</td>
                      </tr>
                      <tr>
                          <td>Memory/Capture a Memory</td>
                          <td>Take a picture/screenshot or clip</td>
                      </tr>
                      <tr>
                          <td>Think, Think about</td>
                          <td>Press T, then /, then command</td>
                      </tr>
                      <tr>
                          <td>Flex Your _ Muscle</td>
                          <td>Press your _ key</td>
                      </tr>
                      <tr>
                          <td>Have a Twinkle</td>
                          <td>This person is streaming</td>
                      </tr>
                      <tr>
                          <td>OOC</td>
                          <td>Out of County</td>
                      </tr>
                      <tr>
                          <td>IC</td>
                          <td>In County</td>
                      </tr>
                  </table>
              </div>

              <div id="commandtable">
                  <table>
                      <tr>
                          <th>Command</th>
                          <th>Action</th>
                      </tr>
                      <tr>
                          <td>/alertadmin</td>
                          <td>Requests an Admin</td>
                      </tr>
                      <tr>
                          <td>/alertdoctor</td>
                          <td>Requests a Doctor</td>
                      </tr>
                      
                      <tr>
                          <td>/alertpolice</td>
                          <td>Sends Police Alert</td>
                      </tr>
                      
                      <tr>
                          <td>/sa</td>
                          <td>Stops Annimation</td>
                      </tr>
                      
                      <tr>
                          <td>/me</td>
                          <td>Creates Temporary Text on Self</td>
                      </tr>
                      
                      <tr>
                          <td>/scene</td>
                          <td>Creates Scene Text</td>
                      </tr>
                      
                      <tr>
                          <td>/status</td>
                          <td>Creates Status Message on self</td>
                      </tr>
                      
                      <tr>
                          <td>/dh</td>
                          <td>Deletes Horse</td>
                      </tr>
                      <tr>
                          <td>/dv</td>
                          <td>Deletes Wagon</td>
                      </tr>
                  </table>
              </div>
          </div>
          <br />
        </div>
      </div>
    </main>
  )
}
