
import bg from "../../assets/bgequip.jpg";
import Logo from "../../assets/logott.png";
import Card from "react-bootstrap/Card";
import serv from "../../assets/serv.JPG";
import React, {useEffect, useState}  from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "use-history";


function Velos() {

    const [equipments, setEquipments] = useState([])
    const history = useHistory();
    const [filter, setFilter] = useState("");

    function refresh() {
        const url = 'http://localhost:8080/velos';//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setEquipments(resp))//setting response to state overtime
            .catch(e => console.log('There is an issue with getting the information' , e))
    }


    useEffect(()=>{refresh()},[]);
    return (
        <div style={{
            backgroundImage: `url(${bg})`, height: "100%",
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

                    <div style={{color: "#ffffff", justifyContent: "center", display: "flex",borderStyle:"dotted",borderColor:"#ff1187",maxWidth:"600px"}}>
                        <h4 style={{fontSize:"32px"}}>Bikes shop</h4>
                    </div>
                    <br/>
                    <div style={{maxWidth:"600px",marginBottom:"-25px"}}>
                        <input style={{color:"white",width:"500px"}} type="text" placeholder="Rechercher.. " name="nom_site" value={filter}
                               onChange={(e) => {
                                   setFilter(e.target.value)
                               }} />
                        <button type="submit"><i className="fa fa-search"/></button>
                    </div>


                </div>
            </div>

            <div className="container"
                 style={{display: "flex", overflow: "auto", height: "540px",marginTop:"110px"}}>

                <div className="row justify-content-start" id="myItems" >
                    {equipments.map((item)=>
                        <div className="cart col-4" hidden={(filter!=="")&&!(item.name.includes(filter))} style={{paddingLeft:"120px"}} >

                            <Card style={{
                                width: '14rem',
                                background: "black",
                                borderColor: "#ff1187",
                                textAlign: "center",

                            }}>



                                <a href="" style={{background: "blue"}}>
                                    <Card.Img variant="top" src={serv}/>
                                </a>
                                <div className="card-bod">
                                    <Card.Body>
                                        <a href="" style={{background: "blue"}} >
                                            <Card.Title><strong style={{color: "#ff1187",fontSize:"24px"}}>{item.name}</strong></Card.Title>
                                        </a>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                    )}


                </div>

            </div>

        </div>

    );

}

export default Velos;