import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import {useHistory} from "use-history";
import { addBalad, DelBalade } from './BaladeApi';

function AddBalade() {

    const [equipments, setEquipments] = useState([])
    const history = useHistory();
    const [filter, setFilter] = useState("");
    const [bal, setbal] = useState({
        name: "",
        description: "",
        destination:"",
        date:"",
      });

      const PushCh=async(e)=>{
        e.preventDefault();
        try {
    const resultadd= await addBalad(bal) 

          }
          catch (error) {
            console.log(error);
          }
          refresh();
      }
    
    function refresh() {
        const url = 'http://localhost:8096/balades';
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setEquipments(resp._embedded.balades))//setting response to state overtime
            .catch(e => console.log('There is an issue with getting the information' , e))
    }

    const onDelete=async(event,id)=>{
        event.preventDefault();
        try {
    const resultadd= await DelBalade(id) }
          catch (error) {
            console.log(error);
          }
          
          refresh();
      }

    useEffect(()=>{refresh()},[]);
    return (
        
    <section clbal="event_section layout_padding">
      
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    
            <br/>
            <br/>
  <div>
    <h3>Liste des Balades</h3>
  <table clbal="table table-striped table-responsive-md">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">IdBalade</th>
    <th scope="col">Name</th>
    <th scope="col">Description</th>
    <th scope="col">Destination</th>
    <th scope="col">Date</th>
  </tr>
</thead>
<tbody>
{equipments.map((domain,index)=>(
<tr>
    <th scope="row">{index}</th>
    <td clbal="text-info" >{domain.id}</td>
    <td clbal="text-info">{domain.name}</td>
    <td clbal="text-info">{domain.description}</td>
    <td clbal="text-info">{domain.destination}</td>
    <td clbal="text-info">{domain.date}</td>
    
<button name="add" clbalName='btn btn-info '  onClick={(event)=>onDelete(event,domain.id)}><i clbal="fa fa-trash"></i> </button>
</tr>
))}
</tbody>
</table>
<form clbal="form-group " >
            <h3>Add Balade</h3>
            <input type="text"  name="name" placeholder='Name'
            onChange={(e) =>
                setbal({ ...bal, name: e.target.value })}/>
                <br/>
            <input type="text"  name="description" placeholder='Description'
            onChange={(e) =>
                setbal({ ...bal, description: e.target.value })}/>
                <br/>
          
          <input type="text"  name="destination" placeholder='Destination'
     onChange={(e) =>
        setbal({ ...bal, destination: e.target.value })}/> 
         <br/>          
         <input type="text"  name="date" placeholder='Date'
    onChange={(e) =>
        setbal({ ...bal, date: e.target.value })}/>
                
            <br/>
            <div clbal="d-flex justify-content-center">
            <button name="add" clbalName="btn btn-info  " onClick={(ev)=>PushCh(ev)}>Add</button>
            </div>
        </form>
</div>
</section>

);

}
export default AddBalade;