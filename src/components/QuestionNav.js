import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

class QuestionNav extends Component {
    render() {
        return (
            <Nav className="content-center">
                <Nav.Item>
                    <Nav.Link >Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default  QuestionNav