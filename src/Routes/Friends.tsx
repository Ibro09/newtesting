import React, { useState, useEffect } from "react";
import "../App.css";

import { TiUserAdd } from "react-icons/ti";
import bg from "../images/sunbg.png";
import Footer from "../components/Footer";
import Back from "../components/Back";
import copy from "../icons/copy.png";
import UserFriends from "../icons/user-friends.png";
import UserPlus from "../icons/user-plus.png";




const Friends: React.FC = () => {
  const [referrals, setReferrals] = useState(1);
  // useEffect(()
  return (
    <div className=' flex justify-center h-screen max-h-screen'>
      <div className='w-full bg-black text-white min-h-screen h-full font-bold flex flex-col max-w-xl bg-no-repeat bg-cover bg-center bubblegum-sans px-5 items-center'>
        <Back />
        <div className=' fixed top-0 bottom-0 left-0 right-0 z-0 items-center'>
          <img
            src={bg}
            alt=''
            className='w-full h-full'
          />
        </div>
        <h5 className='text-[40px] tb tx-shadow mt-6 z-10'>Invite friends</h5>
        <h5 className='mb-5 text-center text-[14px] text-[#2465CF] z-10'>
          You and your friend would recieve bonuses for invitation
        </h5>
        <div className='bg-item w-full px-6 py-4 mb-5 rounded-[10px] z-10'>
          {/* use glass morphism for these */}
          <div className='item'>
            {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
            <div className='txt font-normal px-2 mb-4 flex items-center'>
              <div className=''>
                <p className='text-[17px]'>Share referral link</p>
                <p className='text-[#ddd] text-[14px] -mt-2'>
                  +750 points for you and your friend
                </p>
              </div>
            </div>
            <div className='txt font-normal px-2 mb-4 flex items-center'>
              <div className=''>
                <p className='text-[17px]'>Invite a friend with premium</p>
                <p className='text-[#ddd] text-[14px] -mt-2'>
                  +1000 points for you and your friend
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='main-button bubblegum-sans'>
                <div className='upper btn-upper'>Invite</div>
                <div className='lower  btn-lower'></div>
              </button>
              <div className='main-button copy ml-1'>
                <div className='upper  btn-upper'>
                  <img
                    src={copy}
                    alt=''
                    className='w-6'
                  />
                </div>
                <div className='lower  btn-lower'></div>
              </div>
            </div>
          </div>
        </div>
        <h5 className='text-left font-normal self-start mb-2 text-[#2465CF] z-10'>
          List Of Your Friends ({referrals})
        </h5>
        <div className='bg-item w-full px-6 py-4 mb-5 rounded-[10px] mb-[100px] z-10'>
          {/* use glass morphism for these */}

          {referrals > 0 ? (
            <div className='item'>
              {/* <img src="" alt="" />  PUT that user that has plus on its head as the image  */}
              <div className='txt font-normal'>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />

                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />

                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-2'>
                    <img
                      src={UserPlus}
                      alt=''
                      className='w-8'
                    />
                    <p className='text-[17px]'>user 474372736</p>
                  </div>
                  <p className='text-[12px] font-normal'>+750 pts</p>
                </div>
              </div>
            </div>
          ) : (
            <p className='font-normal'>You have not referred any user</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Friends;





// import { useState, useEffect } from 'react'
// // import { initUtils } from '@telegram-apps/sdk'

// interface ReferralSystemProps {
//   initData: string
//   userId: string
//   startParam: string
// }

// const ReferralSystem: React.FC<ReferralSystemProps> = ({ initData, userId, startParam }) => {
//   const [referrals, setReferrals] = useState<string[]>([])
//   const [referrer, setReferrer] = useState<string | null>(null)
//   const INVITE_URL = "https://t.me/referral_showcase_bot/start"

//   useEffect(() => {
//     const checkReferral = async () => {
//       if (startParam && userId) {
//         try {
//           // const response = await fetch('/api/referrals', {
//           //   method: 'POST',
//           //   headers: { 'Content-Type': 'application/json' },
//           //   body: JSON.stringify({ userId, referrerId: startParam }),
//           // });
//           // if (!response.ok) throw new Error('Failed to save referral');
//         } catch (error) {
//           console.error('Error saving referral:', error);
//         }
//       }
//     }

//     const fetchReferrals = async () => {
//       if (userId) {
//         try {
//           const response = await fetch(`/api/referrals?userId=${userId}`);
//           if (!response.ok) throw new Error('Failed to fetch referrals');
//           const data = await response.json();
//           setReferrals(data.referrals);
//           setReferrer(data.referrer);
//         } catch (error) {
//           console.error('Error fetching referrals:', error);
//         }
//       }
//     }

//     checkReferral();
//     fetchReferrals();
//   }, [userId, startParam])

//   const handleInviteFriend = () => {
//     // const utils = initUtils()
//     const inviteLink = `${INVITE_URL}?startapp=${userId}`
//     const shareText = `Join me on this awesome Telegram mini app!`
//     const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`
//     // utils.openTelegramLink(fullUrl)
//   }

//   const handleCopyLink = () => {
//     const inviteLink = `${INVITE_URL}?startapp=${userId}`
//     navigator.clipboard.writeText(inviteLink)
//     alert('Invite link copied to clipboard!')
//   }

//   return (
//     <div className="w-full max-w-md">
//       {referrer && (
//         <p className="text-green-500 mb-4">You were referred by user {referrer}</p>
//       )}
//       <div className="flex flex-col space-y-4">
//         <button
//           onClick={handleInviteFriend}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Invite Friend
//         </button>
//         <button
//           onClick={handleCopyLink}
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Copy Invite Link
//         </button>
//       </div>
//       {referrals.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Your Referrals</h2>
//           <ul>
//             {referrals.map((referral, index) => (
//               <li key={index} className="bg-gray-100 p-2 mb-2 rounded">
//                 User {referral}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ReferralSystem