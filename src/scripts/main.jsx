import { useState } from 'react';

export function useDropdownToggle() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return { isDropdownOpen, toggleDropdown };
}
