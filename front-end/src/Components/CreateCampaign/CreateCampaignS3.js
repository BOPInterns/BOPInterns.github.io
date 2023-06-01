import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import Card from'react-bootstrap/Card';
import FormGroup from'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Image from'react-bootstrap/Image';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";
import { useState } from 'react';

export const CreateCampaignS3 = () => {
    const [location, setLocation] = useState('');
    const [reach, setReach] = useState([]);
    const [langs, setLangs] = useState([]);

    const displayLangs = () => {
        var list = "Prefferred Languages: ";
        for (let i = 0; i < langs.length; i++){
            list += langs[i] 
            if(i != langs.length -1){
                list += ", "
            }
        }
        return list;
    }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 3: Location & Language</h2>
                    
                </Row>
                <Row className="mt-3">
                    <Card>
                        <Card.Title className="mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>The two fields below are essential to make your campaign recognizable at our platform. Prividing detailed information will also result in better matching with future campaign partners.</Card.Text>    
                        <Form>
                            <FormGroup>
                                <Form.Label>Your location</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="eg.: Poland, Wroclaw" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                /><Form.Text className="text-muted">Where is this campaign taking place?</Form.Text>
                            </FormGroup>
                            <br></br>
                            <FormGroup>
                                <Form.Label>Reach</Form.Label>
                                <Form.Control type="text" placeholder="eg.: India" />
                                <Form.Text>
                                    <Image src="holder.js/100px180">
                                        
                                    </Image>
                                </Form.Text>
                                <Form.Text className="text-muted">You can select the country or make the reach of the campaign using the map above</Form.Text>
                            </FormGroup>
                        </Form>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5">
                    <Card>
                        <Card.Title className="mt-4">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform.</Card.Text>
                            <Form>
                                <FormGroup>
                                    <Form.Label>Preferred languages</Form.Label>
                                    <div className="input-group">
                                    <InputTags values={langs} placeholder='New Tag' onTags={(value) => {setLangs(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setLangs([]);}}
                                    >Delete all</button>
                                    </div>
                                    <hr />
                                    {displayLangs()}
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}