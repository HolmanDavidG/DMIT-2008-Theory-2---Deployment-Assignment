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

    if (error) return <div className="p-4 border rounded shadow">Error: {error}</div>;
    if (!weather) return <div className="p-4 border rounded shadow">Loading Edmonton Weather...</div>;

    return (
        <div className="p-4 border rounded shadow-md bg-white dark:bg-gray-800">
            <h3 className="text-lg font-bold">Edmonton Weather</h3>
            <p className="text-2xl font-semibold">{Math.round(weather.main.temp)}°C</p>
            <p className="capitalize text-gray-600 dark:text-gray-400">{weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
