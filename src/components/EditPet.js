import { useParams } from "react-router-dom";
import PetForm from "./PetForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditPet() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", Breed: "", Vaccinated: "", Owner: "", Trained: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  Breed , Vaccinated , Owner , Trained } = res.data;
                    setInitialValue({ Name, Breed , Vaccinated , Owner , Trained  });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], Breed: newData[1], Vaccinated: newData[2],Owner: newData[3],Trained: newData[4] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <PetForm getState={getState}
                NameValue={initialValue.Name}
                BreedValue={initialValue.Breed}
                VaccinatedValue={initialValue.Vaccinated}
                OwnerValue={initialValue.Owner}
                TrainedValue={initialValue.Trained}
                >
                    Update Pet
            </PetForm>
        </form>
    )
}
export default EditPet;
