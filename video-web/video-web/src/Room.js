import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const {roomID} = useParams();
    let myMeeting = async  (element)=>{
        const appID = 2122395973 ;
        const serverSecret = "a430ef4fd2f400a8563656f5bc015f94";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now()
        .toString(), "Kishore");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    }
  return (
    <div ref={myMeeting}></div>
  )
}

export default Room