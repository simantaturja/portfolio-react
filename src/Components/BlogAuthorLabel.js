import React from 'react';
import { Label, Divider } from 'semantic-ui-react';

const BlogAuthorLabel = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' alt="author image" />
      Simanta Deb Turja
      <Label.Detail>Author</Label.Detail>
    </Label>
    <Divider />
  </div>
)

export default BlogAuthorLabel;