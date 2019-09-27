import React from "react";

import PresentationLayer from '../presentation/CVComponentPresentation';

class CVComponentContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      position: 'Software Developer',
      years: 'nine',
      speed: 3
    };
  }

  render() {
    return (
        <PresentationLayer position={this.state.position} years={this.state.years} speed={this.state.speed}></PresentationLayer>
    );
  }

}

export default CVComponentContainer;