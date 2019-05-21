import React from "react";
import Flip from "react-reveal/Flip";

class FlipWord extends React.Component {
  state = {
    display: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {
      this.setState({
        display: true
      });
      setTimeout(() => {
        this.setState({
          display: false
        });
      }, 4000);
    }
  }

  render() {
    const { display } = this.state;
    const { term } = this.props;
    return (
      <Flip when={display} spy={term} opposite duration={1000} top>
        &nbsp; {term}
      </Flip>
    );
  }
}

export default FlipWord;
