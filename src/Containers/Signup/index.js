import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import Input from '../../Components/UI/Input'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../actions';

const Signup = (props) => {
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    if (auth.authenticate) {
        return <Redirect to="/" />
    }
    
    const userSignup = (e)=>{
          e.preventDefault()
          const user ={
              firstname,
              lastname,
              email,
              password
          }
          dispatch(signup(user))
          setFirstname('')
          setLastname('')
          setEmail('')
          setPassword('')
          if(user.loading){
            return <p>Loading...!</p>
        }
     

    }
    return (
        <Layout>
            {user.message}
            <Container>
                <Row style={{ margin: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="firstname"
                                        type="text"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="lastname"
                                        type="text"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </Col>
                            </Row>
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

export default Signup
