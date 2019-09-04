import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from 'antd';

class List extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <Button type="primary" onClick={() => history.push("/")}>返回首页</Button>
        hello List
      </div>
    );
  }

}


export default withRouter(List)