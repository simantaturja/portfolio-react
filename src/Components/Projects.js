import React from 'react'
import { Grid,Segment, Image } from 'semantic-ui-react';

function Projects() {
    return (
        <div>
            <Grid stackable>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Segment>
                            <Image src="https://miro.medium.com/max/830/1*Pdw7h5X6vQQNVopIzHBG6A.jpeg"/>
                            <Segment textAlign="center">
                                <p><strong>Tinify -  A URL Shortener</strong></p>
                                <p>Technlogy used: MongoDB, ExpressJS, ReactJS, NodeJS, Heroku, Git</p>
                                <p>Tap for the detail documentation</p>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Image src="https://miro.medium.com/max/830/1*Pdw7h5X6vQQNVopIzHBG6A.jpeg"/>
                            <Segment textAlign="center">
                                <p><strong>Tinify -  A URL Shortener</strong></p>
                                <p>Technlogy used: MongoDB, ExpressJS, ReactJS, NodeJS, Heroku, Git</p>
                                <p>Tap for the detail documentation</p>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Image src="https://miro.medium.com/max/830/1*Pdw7h5X6vQQNVopIzHBG6A.jpeg"/>
                            <Segment textAlign="center">
                                <p><strong>Tinify -  A URL Shortener</strong></p>
                                <p>Technlogy used: MongoDB, ExpressJS, ReactJS, NodeJS, Heroku, Git</p>
                                <p>Tap for the detail documentation</p>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Projects
