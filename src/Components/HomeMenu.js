import React from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Home from './Home'

const SidebarExampleTarget = () => {
  const segmentRef = React.useRef()
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            target={segmentRef}
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
          </Sidebar>

          <Ref innerRef={segmentRef}>
            <Segment secondary>
              <Home />
            </Segment>
          </Ref>

          
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarExampleTarget