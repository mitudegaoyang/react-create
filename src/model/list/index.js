import React from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import { Button } from 'antd';
import BreadcrumbBar from "../../components/BreadcrumbBar";

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    }
  }
};

class List extends React.Component {

  render() {

    const { classes, history } = this.props;

    return (
      <div className="form">
        <BreadcrumbBar></BreadcrumbBar>
        <Button className={classes.root} type="primary" onClick={() => history.push("/")}>返回首页</Button>
        hello List
      </div>
    );
  }

}


export default withStyles(styles)(withRouter(List))