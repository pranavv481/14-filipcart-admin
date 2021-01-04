import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import Input from '../../Components/UI/Input'
import { login, isUserLogin } from '../../actions';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Signin = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state => state.auth)
   
    const userLogin = (e) => {
        e.preventDefault()
        const user = {
            email, password
        }
        dispatch(login(user))
    }
    if(auth.authenticate){
        return <Redirect to ="/"/>
    }
    return (
        <Layout>
            <Container>
                <Row style={{ margin: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="password"
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default Signin
