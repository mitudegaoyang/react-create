import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from 'antd';
import BreadcrumbBar from "../../components/BreadcrumbBar";

class List extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <BreadcrumbBar></BreadcrumbBar>
        <Button type="primary" onClick={() => history.push("/")}>返回首页</Button>
        hello List
      </div>
    );
  }

}


export default withRouter(List)