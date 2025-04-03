import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import placeholderImage from "../assets/img/lafoto.png"
import { useEffect, useState } from "react";

export const CharacterInfo = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();
    let params = useParams()
    let character = []
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [birthdate, setBirthdate] = useState()
    const [height, setHeight] = useState()
    const [mass, setMass] = useState()

    async function loadData() {
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${params.uid}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            setName(data.result.properties.name)
            setGender(data.result.properties.gender)
            setBirthdate(data.result.properties.birth_year)
            setHeight(data.result.properties.height)
            setMass(data.result.properties.mass);

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
                <div className="col border border-bottom-0 border-top-0 border-danger">Gender<br/> <b>{gender}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Birth Year<br/> <b>{birthdate}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Height<br/> <b>{height}</b> </div>
                <div className="col border border-bottom-0 border-top-0 border-danger">Mass<br/> <b>{mass}</b> </div>
            </div>
        </div>
    )
}; 