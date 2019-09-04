import React from 'react';
import { withRouter } from "react-router-dom";
import BreadcrumbBar from "../../../components/BreadcrumbBar";

class List extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <BreadcrumbBar></BreadcrumbBar>
        <button onClick={() => history.push("/")}>返回首页</button>
        hello ListChild
      </div>
    );
  }

}


export default withRouter(List)