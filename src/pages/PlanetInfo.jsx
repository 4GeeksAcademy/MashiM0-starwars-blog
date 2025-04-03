import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import placeholderImage from "../assets/img/lafoto2.png"
import { useEffect, useState } from "react";

export const PlanetInfo = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();
    let params = useParams()
    let character = []
    const [name, setName] = useState()
    const [climate, setClimate] = useState()
    const [terrain, setTerrain] = useState()
    const [diameter, setDiameter] = useState()
    const [population, setPopulation] = useState()

    async function loadData() {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${params.uid}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            setName(data.result.properties.name)
            setClimate(data.result.properties.climate)
            setTerrain(data.result.properties.terrain)
            setDiameter(data.result.properties.diameter)
            setPopulation(data.result.properties.population);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="container">
            <div className="container row my-3">
                <div className="col-4">
                    <img className='img-fluid border'src={placeholderImage} />
                </div>
                <div className="col">
                    <h1 className="fw-bold">{name}</h1>
                    <div className="border-bottom border-warning mt-1 mb-2"></div>
                    <p className="fs-5">Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore m
                         agna aliqua. Ut enim ad minim veniam, quis nostrud exe
                         rcitation ullamco laboris nisi ut aliquip ex ea commod
                         o consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pa
                          riatur. Excepteur sint occaecat cupidatat non proiden
                          t, sunt in culpa qui officia deserunt mollit anim id 
                          est laborum.</p>
                </div>
            </div>
            <div className="container row text-center">
                <div className="col border border-bottom-0 border-top-0 border-danger">Name<br/> <b>{name}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Climate<br/> <b>{climate}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Terrain<br/> <b>{terrain}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Diameter<br/> <b>{diameter}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Population<br/> <b>{population}</b> </div>
            </div>
        </div>
    )
}; 