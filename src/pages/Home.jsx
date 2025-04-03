import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import InfoCard from "../components/InfoCard.jsx";
import InfoCardPlanet from "../components/InfoCardPlanet.jsx";
import { useEffect } from "react";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				dispatch({
					type: "sync_people",
					payload: data.results
				})
				return console.log(data)
			})
			.catch(err => console.error(err))

	}, []);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/")
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				dispatch({
					type: "sync_planets",
					payload: data.results
				})
				return console.log(data)
			})
			.catch(err => console.error(err))

	}, []);

	console.log(store)

	return (
		<div className="container mt-5">
			<h1>Characters</h1>
			<div className="scroll">
				<div className="d-flex">
					{store.people && store.people.map((item) => {
						return <InfoCard item={item} key={item.uid}/>
					})}
				</div>
			</div>
			<h1>Planets</h1>
			<div className="scroll">
				<div className="d-flex">
					{store.planets && store.planets.map((item) => {
						return <InfoCardPlanet item={item} key={item.uid} />
					})}
				</div>
			</div>
		</div>
	);
}; 