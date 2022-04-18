import React from 'react';
import { Container } from 'react-bootstrap';
import './blog.css'

const Blogs = () => {
    return (
        <div className='bolg__container my-5'>
            <Container>
                <div className="blog__item my-4">
                    <h4>1. Difference between authorization and authentication</h4>
                    <p>Authentication is process to  verifying someone , on the other side authorization is process  verifying what data a user has access to. authentication done before authorization process. And authorization process done after authentication process. authentication need user login details. authentication need use details to verify user. Authorization needs user privilege to what permission user have.</p>
                </div>
                <div className="blog__item my-4">
                    <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Using Firebase Authentication to allow users to sign in to your app using one or more sign-in methods. And it makes our life easy and we do such things in short time. Firebase Authentication provides ready made UI libraries to authenticate users to our  app. It supports authentication using email-passwords, Google, Facebook and Twitter, and more. Special about Firebase Authentication is that it makes easy to perform secure logins.</p>
                </div>
                <div className="blog__item">
                    <h4>3. What other services does firebase provide other than authentication?</h4>
                    <p>Firebase is a package that can help develop mobile or web applications faster with fewer resources and more efficiency. There are a lot of services which Firebase provides, most of them are: Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;