import { NavigationBar } from '../NavigationBar';
import Container from  'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../videoPlaceHolder.png';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './CampaignPage.css'

export const CampaignPage = () => {
    return (
        <div>
            <NavigationBar/>
            <Container 
                fluid 
                style={{
                    backgroundColor: '',
                }}
            >
                <Row
                    style={{
                        justifyContent: 'center',
                        paddingTop: '80px',
                    }}
                >
                    <Col
                        style={{
                            paddingRight: '0px',
                            paddingLeft: '200px'
                        }}
                    >
                <Card
                    style={{
                        height: '400px',
                        width: '',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                        
                    }}
                >
                    <Card.Title
                        style={{
                            padding: '30px',
                            paddingBottom: '0px',
                        }}
                    >
                        <h3>Migrant Construction Labour in Bangladesh</h3>
                    </Card.Title>
                    <Card.Body>
                        <Row
                            style={{
                                paddingBottom: '0px',
                            }}
                        >
                            <p>Campaign contributes to these SDG challenges:</p>
                        </Row>
                        <Row
                            style={{
                                paddingTop: '0px'
                            }}
                        >
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                        </Row>
                        <Row>
                            <p><strong>Campaign Status:</strong></p>
                        </Row>
                        <Row>
                            <Col>
                                <Badge
                                    bg='warning'
                                >
                                    Challenge
                                </Badge>
                            </Col>
                            <Col>
                                <Button
                                    className="custom-links-btn"
                                >
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                    learn more about campaign status
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <strong>Deadline:</strong>
                        </Row>
                        <Row>
                            <p>Arbitrary date</p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col
                    sm={5}
                    style={{
                        paddingLeft: '0px',
                        paddingRight: '200px',
                    }}
                >
                    <Card
                        style={{
                            height: '400px',
                            paddingLeft: '0px',
                            background: 'linear-gradient(to bottom, lightgray, white)',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                            borderLeft: '0px'
                        }}
                    >
                        <Card.Title
                            style={{
                                paddingTop: '20px',
                                paddingLeft: '20px',
                                paddingBottom: '0px',
                            }}
                        >
                            <h6>Check how this campaign matches your goals</h6>
                        </Card.Title>
                        <Card.Body>
                            <Row
                                style={{
                                    textAlign: 'center',
                                    padding: '15px'
                                }}
                            >
                                <strong
                                    style={{color: 'green'}}
                                >
                                    Overall matching: 96%
                                </strong>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    98%
                                </Col>
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    95%
                                </Col>
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    95%
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col>
                                    relevance
                                </Col>
                                <Col>
                                    complementary
                                </Col>
                                <Col>
                                    community rating
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'end',
                                    padding: '20px',
                                    paddingRight: '0px'
                                }}
                            >
                                <Col>
                                <Button
                                    className="custom-links-btn"
                                    size="sm"
                                >
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                    detailed matching information
                                </Button>
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                    paddingBottom: '20px',
                                }}
                            >
                                <Col>
                                    <Button
                                        className="custom-btn"
                                    >
                                        Participate in this campaign
                                    </Button>
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col>
                                    <Button
                                        className="custom-btn"
                                    >
                                        Follow campaign
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}