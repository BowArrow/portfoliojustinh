import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import instaicon from '../../assets/instagramicon.png';
import downloadicon from '../../assets/downloadicon.png';
import './style.css'

class About extends Component {
    state = {

    }

    render() {
        return (
            <>
                <MDBContainer>
                    <MDBRow className='bg-about-title mb-4'>
                        <MDBCol md='2'></MDBCol>
                        <MDBCol className='about-title-container d-flex align-content-left my-auto'>
                            <h1>About The Artist</h1>
                        </MDBCol>
                        <MDBCol md='2'></MDBCol>
                    </MDBRow>
                    <MDBRow className='about-content mb-3'>
                        <MDBCol md='2'></MDBCol>
                        <MDBCol>
                            <div className='d-flex flex-column align-content-left about-content-container'>
                                <p>Justin is an interdisciplinary artist based in the Bay Area, whose work explores themes of identity, queerness, and personal transformation. Growing up in non-urban California in a salt-of-the-earth way, they learned from an early age to work with their hands—an experience that continues to shape their material-driven practice. Working with wood, metal, ceramics, and found objects, they construct deeply personal works that examine the impact of Catholicism, rigid masculinity, and the emotional weight of living inauthentically. Their art delves into the complexities of being closeted, self-denial, and the question of what life could have been in a more accepting world. Justin earned a BFA in Spatial Art with minors in ceramics and art education from San Jose State University, as well as a master's in teaching. For several years, they have shared their passion for art as a high school teacher, fostering creativity in the next generation. Their work is influenced by artists like Mark Dion and Tony Feher, particularly in how they record the world around them and their place within it.
                                </p>
                                <p>Through layered textures and evocative forms, Justin reflects on their journey of self-acceptance, addressing themes of depression, resilience, and the search for belonging. Their work challenges societal expectations and invites viewers to confront the hidden narratives within themselves.</p>
                                <p>My work is a reflection of identity, memory, and the emotional weight of navigating a world that often demands conformity. As a member of the LGBTQ community, my art serves as both a processing tool and an act of resistance—confronting the depression and isolation that came from being closeted and pretending to be someone I was not. Through interdisciplinary methods, I explore the tension between authenticity and imposed expectations, using representation to give form to experiences that are often silenced.</p>
                                <p>The negative effects of Catholicism are a recurring theme in my work, particularly its role in shaping internalized shame and the struggle for self-acceptance. By weaving together different mediums, I create a space where personal narratives intersect with broader cultural critiques, transforming pain into something tangible and shared. My practice is not just about personal catharsis but about opening a conversation—one that acknowledges the wounds of the past while reclaiming the power of self-definition.</p>
                                <p>Working with wood, metal, ceramics, and other materials, I explore themes that are deeply personal yet universally resonant.</p>
                                <p>My pieces examine the lasting impact of attempted suicide on my life, imagining both the weight of survival and the question of what could have been. I also confront the question of what my life might have looked like had I grown up in an environment that embraced me fully—one that did not prioritize rigid masculinity over self-discovery. Additionally, my work reflects my evolving relationship with my own sexuality, chronicling the journey of learning to accept myself as part of the queer community. These materials, with their contrasting strengths and vulnerabilities, allow me to physically manifest the complexities of these experiences.</p>
                                <p>Art, for me, is both a means of survival and an offering—a way to reconcile the fractures of identity and invite others into a space of reflection, connection, and ultimately, liberation.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md='2'></MDBCol>
                    </MDBRow>
                    <MDBRow className='about-content'>
                        <MDBCol md='2'></MDBCol>
                        <MDBCol md='2' className='px-0'>
                            <MDBBtn className='about-btn d-flex align-items-center justify-content-center'><img className="about-icons" src={downloadicon} alt="CV/Resume"/><span className='ms-auto'>CV/Resume</span></MDBBtn>
                        </MDBCol>
                        <MDBCol></MDBCol>
                        <MDBCol md='2' className='d-flex px-0'>
                            <MDBBtn className='about-btn ms-auto d-flex align-items-center justify-content-center' href='https://www.instagram.com/j.m.holthouse/'><img className="about-icons" src={instaicon} alt="instagram"/><span className='ms-auto'>j.m.holthouse</span></MDBBtn>
                        </MDBCol>
                        <MDBCol md='2'></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

export default About;