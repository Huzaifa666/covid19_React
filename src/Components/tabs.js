import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink , Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Domestic from './Domestic';
import Intl from './Intl'


const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Domestic Airlines
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Intl. Airlines
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Domestic />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <Intl />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <div id="blank"></div>
    </div>
  );
}

export default Tabs;