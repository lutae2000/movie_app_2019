import React from "react";

class Detail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;
      if (location.state === undefined) {
        history.push("/");
      }
    }
    render() {
      const { location } = this.props;
      if (location.state) {
        return (
            <span>
                
                <img src={location.state.poster}></img>
                <h2>{location.state.title}</h2>
                <p>{location.state.summary}</p>
            </span>
            
        );
      } else {
        return null;
      }
    }
  }

export default Detail;