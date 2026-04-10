import { useState, useEffect } from 'react';

const WeatherCard = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;
            const city = "Edmonton";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Weather data fetch failed");
                const data = await response.json();
                setWeather(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchWeather();
    }, []);

