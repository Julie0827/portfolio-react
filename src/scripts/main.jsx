import { useState, useRef } from 'react';

export function useDropdownToggle() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return { isDropdownOpen, toggleDropdown };
}

export function useAudioControl() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const iconRef = useRef(null);
    const playPauseBtnRef = useRef(null);
  
    const toggleAudio = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
            iconRef.current.src = '/assets/images/pause.svg';
            iconRef.current.alt = 'Pause Icon';
            playPauseBtnRef.current.classList.add('playing');
            playPauseBtnRef.current.title = 'Pause Music';
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
            iconRef.current.src = '/assets/images/play.svg';
            iconRef.current.alt = 'Play Icon';
            playPauseBtnRef.current.classList.remove('playing');
            playPauseBtnRef.current.title = 'Play Music';
        }
    };
  
    return {
        isPlaying,
        toggleAudio,
        audioRef,
        iconRef,
        playPauseBtnRef
    };
}
