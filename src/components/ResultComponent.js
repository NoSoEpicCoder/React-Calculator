import React ,{Component} from 'react';

class ResultComponent extends Component {
  render() {
    let {result} = this.props;
    return(
      <div classname="result" id="result-screen">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
