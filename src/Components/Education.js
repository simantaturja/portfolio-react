import React from "react";
import { Segment, Container, Header, List } from "semantic-ui-react";
function Education() {
  return (
    <div>
      <Container>
        <Segment piled color={'olive'}>
          <Header>Education</Header>
        </Segment>
        <List style={{marginTop: "-20px", marginBottom: "50px"}}>
          <List.Item>
            <List.Icon name="certificate" />
            <List.Content>
              Bachelor of Science in Computer Science and Engineering
              <List.List>
                <List.Item>
                  <List.Icon name="university" />
                  <List.Content>
                    Ahsanullah University of Science and Technology
                    <List bulleted>
                      <List.Item>
                        Activities
                        <List bulleted>
                          <List.Item>
                            Pariticipated in 15+ National/ICPC/IUPC/IAPC
                            Programming Contests.
                          </List.Item>
                          <List.Item>
                            Trainer, AUST ACM Programming Lab 02
                          </List.Item>
                          <List.Item>
                            Organizing Team Coordinator, Intra AUST Programming
                            Contest Spring 2019
                          </List.Item>
                          <List.Item>
                            Judge and Problemsetter, Intra AUST Programming
                            Contest Spring 2019 and Fall 2019
                          </List.Item>
                        </List>
                      </List.Item>
                    </List>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    </div>
  );
}

export default Education;
