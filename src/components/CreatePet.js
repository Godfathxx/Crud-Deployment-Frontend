import { useState } from "react";
import PetForm from "./PetForm";
import Axios from "axios";

function CreatePet()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {Name: arr[0],Breed:arr[1],Vaccinated:arr[2],Owner:arr[3],Trained:arr[4]};
        Axios.post("https://crud-deployment-backend-15pi.onrender.com/petRoute/create-Pet",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <PetForm getState={getState}
                    NameValue=""
                    BreedValue=""
                    VaccinatedValue=""
                    OwnerValue=""
                    TrainedValue="">
                Create Pet
            </PetForm>
        </form>
    )
}
export default CreatePet;
