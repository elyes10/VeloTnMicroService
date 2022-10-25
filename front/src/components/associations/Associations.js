

import Logo from "../../assets/logott.png";
import Card from "react-bootstrap/Card";
import associaionimg from "../../assets/associaionimg.png";
import React, {useEffect, useState}  from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "use-history";


function Associations() {

    const [equipments, setEquipments] = useState([])
    const history = useHistory();
    const [filter, setFilter] = useState("");

    function refresh() {
        const url = 'http://localhost:8091/Associations';
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setEquipments(resp))//setting response to state overtime
            .catch(e => console.log('There is an issue with getting the information' , e))
    }


    useEffect(()=>{refresh()},[]);
    return (
        <div style={{
            position: "absolute",
            left: "0",
            width: "100%",
            overflow: "hidden"
        }}>
            <link rel="stylesheet" href=
                "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            

            <br/>
            <br/>
            <div style={{ marginTop: "-5px" }} className="row" >
                <div className="col s8 offset-s2" style={{marginLeft:"510px"}}>

                    <div style={{ justifyContent: "center", display: "flex",borderStyle:"dotted",borderColor:"#000000",maxWidth:"600px"}}>
                        <h4 style={{fontSize:"32px"}}>Associations</h4>
                    </div>
                    <br/>
                    <div style={{maxWidth:"600px",marginBottom:"-25px"}}>
                        <input style={{width:"500px"}} type="text" placeholder="Rechercher.. " name="nom_site" value={filter}
                               onChange={(e) => {
                                   setFilter(e.target.value)
                               }} />
                        <button type="submit"><i className="fa fa-search"/></button>
                    </div>


                </div>
            </div>
            {/* <button className="btn " style={{display:"flex",float:"right",marginRight:"150px",marginTop:"100px"}} onClick={()=>history.push('/add_association')}>Ajouter Association</button> */}
            <div className="container"
                 style={{display: "flex", overflow: "auto", height: "540px",marginTop:"110px"}}>

                <div className="row justify-content-start" id="myItems" >
                    {equipments.map((item)=>
                    <div className='mx-auto'>
                        <div className="cart col-4" hidden={(filter!=="")&&!(item.name.includes(filter))} style={{paddingLeft:"120px"}} >

                            <Card style={{
                                width: '18rem',
                                background: "black",
                                borderColor: "#00000",
                                textAlign: "center",

                            }}>



                                <a href='' style={{background: "blue"}}>
                                    <Card.Img variant="top" src={associaionimg}/>
                                </a>
                                <div className="card-bod">
                                    <Card.Body>
                                        <a href='' style={{background: "blue"}} >
                                            <Card.Title><strong style={{color: "#26a69a",fontSize:"24px"}}>{item.name}</strong></Card.Title>
                                            <p>{item.email}</p>
                                            <p>{item.numero}</p>
                                            <p>{item.address}</p>
                                        </a>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div></div>
                    )}


                
                </div>

            </div>

        </div>

    );

}
export default Associations;