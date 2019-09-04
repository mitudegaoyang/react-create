import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

class BreadcrumbBar extends React.Component {

  renderItem(path) {
    let items = [];
    for (let index = 0; index < path.length; index++) {
      const element = path[index];
      // let cls = classes.item;
      // if (index == path.length - 1) {
      //   cls = classes.item_curr;
      // }
      items.push(
        <Breadcrumb.Item key={element.index}>
          <span className={element.path}>{element.title}</span>
        </Breadcrumb.Item>
      );
    }
    return items;
  }

  render() {

    const { location } = this.props;
    const selectedKeys = location.pathname.substr(1);
    const keys = selectedKeys.split('/');
    let path = [];
    for(let i in keys) {
      let obj = {
        'title': keys[i],
        'path': keys[i],
        'index': i,
      }
      path.push(obj)
    }

    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {this.renderItem(path)}
      </Breadcrumb>
    )
  }
}

export default withRouter(BreadcrumbBar);