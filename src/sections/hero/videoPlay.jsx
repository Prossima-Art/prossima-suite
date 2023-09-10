import React from 'react';

const VideoURL='https://s3-figma-videos-production-sig.figma.com/video/835212680197847456/TEAM/bd87/629b/-dbdf-41cf-b206-74795975c7d4?Expires=1694995200&Signature=nJq-Hg1g~KwTSsS-V9bOVLipIIiAW3M2QetVy53ga~Bamy-yMKK~5DD71nHUhq9uK0u5gGtGicQlPby4mJyfIRsFP8wkK-pGBTaYq-2fOYi-~ap3dhXSsX49zTWzOn5HPm9tuBEwwYts8-QdAGeMCXFPibD0ilT6rfK6mXxnWqS4nfYK2VGyCr2GHykUKX0mKHUvv47tdDPL~lNojBom0YfB5incF6VoM4qYvLhov-WpdCakB0pGDAxONKRfV9AXzF7iJh9d6TVcb0N0-nm~HWHAAe~2MIZjT-yRHhxqZDzSzbzSf6ybfYp6Rx9JA-CBBrBhJ8xjuRuloveI3WcZZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
const PlayButton= (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M6.5 19.3229H10.5V5.32294H6.5V19.3229ZM14.5 5.32294V19.3229H18.5V5.32294H14.5Z" fill="#0068FF"/>
</svg>
)
export default function VideoPlay() {
    const toogleVideoPlay = () => {
        const video = document.querySelector('.video');
        video.paused ? video.play() : video.pause();
    }

    return (
        <div>
        <video width="650" height="370" className='video' controls>
            <source src={VideoURL} onTimeUpdate={
                e => {
                    const slider = document.querySelector('.slider');
                    slider.value = e.target.currentTime / e.target.duration;
                }
            } type="video/mp4" />
        </video>
        <div className='playButton'>
            <button className='playButton' onClick={toogleVideoPlay}>{PlayButton}</button>
            <input type='range' min='0' max='1' value={0.5} onChange={e => {
                const video = document.querySelector('.video');
                video.currentTime = video.duration * e.target.value;
            }}
            style={{width: '80%'}}
            step='0.01'
             
            className='slider' />
        </div>

        </div>
        
    );
    }