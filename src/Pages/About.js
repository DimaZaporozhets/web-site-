import React, {Component} from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                       <Col sm={3}>
                           <Nav varient="pills" className="flex-column mt-2" >
                               <Nav.Item>
                                   <Nav.Link eventKey="first" >Design</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="second" >Team</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="third" >Programming</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                               </Nav.Item>
                           </Nav>
                       </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://bilabil.com/wp-content/uploads/2019/12/framework-javascript-terbaik.jpg" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://lh3.googleusercontent.com/proxy/DNCYudWEAto2F7nUSZKDEmolMSCTaYID04Voqak7P080FaQ2CQKB4caW3syTuKPiy-RjsxYyEfc0oy5OaM7v8liBTb9XI0QntxJXSS1WNg5Gc_HNYNVm_Bv3cyzF7SxLXcI" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quo labore repellendus nesciunt doleibus minima
                                        accusantium! Unde, doloremgue fugiat sint laugantium
                                        aspernatur modi?
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
