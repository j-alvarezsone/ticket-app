import { useContext, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { NewTicketType } from '../types/types';

const { Title, Text } = Typography;
export const CreateTicket = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<NewTicketType | null>(null);

  const newTicket = () => {
    socket.emit('request-ticket', null, (ticket: NewTicketType) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row justify='center'>
        <Col span={14} style={{ textAlign: 'center' }}>
          <Title level={3}>Press the button for a new ticket</Title>

          <Button type='primary' shape='round' icon={<DownloadOutlined />} size='large' onClick={newTicket}>
            New Ticket
          </Button>
        </Col>
      </Row>

      {ticket && (
        <Row justify='center' style={{ marginTop: '100px' }}>
          <Col span={14} style={{ textAlign: 'center' }}>
            <Title level={4}>Your number</Title>
            <br />
            <Text type='success' style={{ fontSize: 55 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
