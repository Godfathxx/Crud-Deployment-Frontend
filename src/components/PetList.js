import Axios from "axios";
import { useEffect, useState } from "react";
import PetListRow from "./PetListRow";

function PetList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-15pi.onrender.com/petRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  
            return <PetListRow obj={val}/>
        })
    }
    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Breed</th>
                    <th class="text-center">Vaccinated</th>
                    <th class="text-center">Owner</th>
                    <th class="text-center">Trained</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default PetList;
