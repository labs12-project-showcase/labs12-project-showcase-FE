import React from "react";
import Flip from "react-reveal/Flip";

class FlipWord extends React.Component {
  state = {
    display: true,
    duration: 1000
  };

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {
      this.setState({
        display: true
      });
      this.timer = setTimeout(() => {
        this.setState({
          display: false
        });
      }, this.props.transitionTime - this.state.duration);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { display, duration } = this.state;
    const { term } = this.props;
    return (
      <Flip when={display} spy={term} opposite duration={duration} top>
        &nbsp; {term}
      </Flip>
    );
  }
}

export default FlipWord;
