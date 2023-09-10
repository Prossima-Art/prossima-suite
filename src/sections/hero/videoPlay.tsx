import React, { useState, useRef, useEffect } from 'react';

const VideoURL: string =
    'https://s3-figma-videos-production-sig.figma.com/video/835212680197847456/TEAM/bd87/629b/-dbdf-41cf-b206-74795975c7d4?Expires=1694995200&Signature=nJq-Hg1g~KwTSsS-V9bOVLipIIiAW3M2QetVy53ga~Bamy-yMKK~5DD71nHUhq9uK0u5gGtGicQlPby4mJyfIRsFP8wkK-pGBTaYq-2fOYi-~ap3dhXSsX49zTWzOn5HPm9tuBEwwYts8-QdAGeMCXFPibD0ilT6rfK6mXxnWqS4nfYK2VGyCr2GHykUKX0mKHUvv47tdDPL~lNojBom0YfB5incF6VoM4qYvLhov-WpdCakB0pGDAxONKRfV9AXzF7iJh9d6TVcb0N0-nm~HWHAAe~2MIZjT-yRHhxqZDzSzbzSf6ybfYp6Rx9JA-CBBrBhJ8xjuRuloveI3WcZZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

const PlayButton: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M6.5 19.3229H10.5V5.32294H6.5V19.3229ZM14.5 5.32294V19.3229H18.5V5.32294H14.5Z" fill="#0068FF" />
    </svg>
);
const StopButton: JSX.Element = (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.42751 7.14293V17.5029C7.42751 18.2929 8.29751 18.7729 8.96751 18.3429L17.1075 13.1629C17.7275 12.7729 17.7275 11.8729 17.1075 11.4729L8.96751 6.30293C8.29751 5.87293 7.42751 6.35293 7.42751 7.14293Z" fill="#0068FF" />
    </svg>
);


export default function VideoPlay(): JSX.Element {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sliderRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video && isPlaying) {
            video.play();
        } else if (video) {
            video.pause();
        }
    }, [isPlaying]);

    const toggleVideoPlay = (): void => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    const handleTimeUpdate = (): void => {
        const video = videoRef.current;
        const slider = sliderRef.current;

        if (video && slider && video.duration) {
            const progress = video.currentTime / video.duration;
            slider.value = String(progress);
            setCurrentTime(progress);
        }
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const video = videoRef.current;
        if (video) {
            const progress = Number(e.target.value);
            setCurrentTime(progress);
            video.currentTime = progress * video.duration;
        }
    };

    return (
        <div>
            <video
                width="650"
                height="370"
                className="video"
                autoPlay
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={toggleVideoPlay}
            >
                <source src={VideoURL} type="video/mp4" />
            </video>
            <div className="play-container">
                <button className="play-container_button" onClick={toggleVideoPlay}>
                    {isPlaying ? PlayButton : StopButton}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    value={currentTime}
                    onChange={handleSliderChange}
                    step="0.01"
                    className="play-container_slider-video-range"
                    ref={sliderRef}
                    placeholder='input slider'
                />
            </div>
        </div>
    );
}

