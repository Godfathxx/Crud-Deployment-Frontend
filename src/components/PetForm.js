import { useEffect, useState } from "react";

function PetForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [Breed,setBreed] = useState(props.BreedValue);
    const [Vaccinated,setVaccinated] = useState(props.VaccinatedValue);
    const [Owner,setOwner] = useState(props.OwnerValue);
    const [Trained,setTrained] = useState(props.TrainedValue);

    useEffect(()=>{
        setName(props.NameValue);
        setBreed(props.BreedValue);
        setVaccinated(props.VaccinatedValue);
        setOwner(props.OwnerValue);
        setTrained(props.TrainedValue);
    },[props.NameValue,props.BreedValue,props.VaccinatedValue,props.OwnerValue,props.TrainedValue]);
   
    const arr = [Name,Breed,Vaccinated,Owner,Trained];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Pet-Name" />
            <input defaultValue={props.BreedValue} onChange={(event)=>setBreed(event.target.value)} class="form-control my-3" placeholder="Enter your Pet-Breed" />
            <input defaultValue={props.VaccinatedValue} onChange={(event)=>setVaccinated(event.target.value)} class="form-control my-3" placeholder="Is your Pet-Vaccinated" />
            <input defaultValue={props.OwnerValue} onChange={(event)=>setOwner(event.target.value)} class="form-control my-3" placeholder="Enter Owner-Name" />
            <input defaultValue={props.TrainedValue} onChange={(event)=>setTrained(event.target.value)} class="form-control my-3" placeholder="Is your Pet-Trained" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default PetForm;
