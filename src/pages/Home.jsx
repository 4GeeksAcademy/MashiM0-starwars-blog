import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import InfoCard from "../components/InfoCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container mt-5">
			<h1>Characters</h1>
			<InfoCard />
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 