import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'


export default function signup() {
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='email' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>

                    <Button className='w-100' type='submit'>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-200 text-center mt-2'>
            Already have an account? Log in
        </div>
    </>>
  )
}
