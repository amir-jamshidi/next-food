'use client'

import { useState } from "react"


export const useGeolocation = (defaultPosition = null) => {
    const [isLoading, setIsLoadin] = useState(false);
    const [position, setPosition] = useState(defaultPosition);
    const [error, setError] = useState(null);

    const getPosition = () => {
        try {
            setIsLoadin(true)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(recivePositon);
            }
            function recivePositon(position) {
                setIsLoadin(false);
                setPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
            }
        } catch (error) {
            setIsLoadin(false)
            setError(true)
        }
    }
    return { isLoading, error, position, getPosition }
}
