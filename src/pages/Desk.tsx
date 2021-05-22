import { useState, useContext } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helper/getUserStorage';
import { Redirect, useHistory } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { NewTicketType } from '../types/types';

const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);
  const [user] = useState(getUserStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<NewTicketType | null>(null);
  const history = useHistory();

  const leave = () => {
    localStorage.clear();
    history.replace('/toenter');
  };

  const nextTicket = () => {
    socket.emit('next-ticket', user, (ticket: NewTicketType) => {
      setTicket(ticket);
    });
  };

  if (!user.agent || !user.desk) {
    return <Redirect to='/toenter' />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working at the desk: </Text>
          <Text type='success'>{user.desk}</Text>
        </Col>

        <Col span={4}>
          <Button shape='round' type='primary' danger onClick={leave}>
            <CloseCircleOutlined />
            Leave
          </Button>
        </Col>
      </Row>

      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>Is attending the ticket number: </Text>
            <Text style={{ fontSize: 30 }} type='danger'>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={20} span={8}>
          <Button shape='round' type='primary' onClick={nextTicket}>
            <RightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
