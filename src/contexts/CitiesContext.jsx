import React, { useEffect, useState, useContext, createContext } from 'react';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [currentCity, setCurrentCity] = useState({});

	useEffect(() => {
		async function fetchCites() {
			try {
				setLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		fetchCites();
	}, []);

	async function getCity(id) {
		try {
			setLoading(true);
			const res = await fetch(`${BASE_URL}/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>{children}</CitiesContext.Provider>
	);
}

const useCities = () => {
	const context = useContext(CitiesContext);
	if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
	return context;
};

export { CitiesProvider, useCities };
