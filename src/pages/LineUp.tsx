import { Typography, Row, Col, List, Card, Tag, Divider } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { getLast } from '../helper/getLast';
import { useHideMenu } from '../hooks/useHideMenu';
import { NewTicketType } from '../types/types';

const { Title, Text } = Typography;

// const data = [
//   {
//     ticketNo: 33,
//     escritorio: 3,
//     agente: 'Fernando Herrera',
//   },
//   {
//     ticketNo: 34,
//     escritorio: 4,
//     agente: 'Melissa Flores',
//   },
//   {
//     ticketNo: 35,
//     escritorio: 5,
//     agente: 'Carlos Castro',
//   },
//   {
//     ticketNo: 36,
//     escritorio: 3,
//     agente: 'Fernando Herrera',
//   },
//   {
//     ticketNo: 37,
//     escritorio: 3,
//     agente: 'Fernando Herrera',
//   },
//   {
//     ticketNo: 38,
//     escritorio: 2,
//     agente: 'Melissa Flores',
//   },
//   {
//     ticketNo: 39,
//     escritorio: 5,
//     agente: 'Carlos Castro',
//   },
// ];
export const LineUp = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState<NewTicketType[]>([]);

  useEffect(() => {
    socket.on('ticket-assigned', (assigned: NewTicketType[]) => {
      setTickets(assigned);
    });

    return () => {
      socket.off('ticket-assigned');
    };
  }, [socket]);

  useEffect(() => {
    getLast().then((tickets: NewTicketType[]) => setTickets(tickets));
  }, []);

  return (
    <>
      <Title level={1}>Serving a customer</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'>{item.agent}</Tag>,
                    <Tag color='magenta'>Desk: {item.desk}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type='secondary'>On the desk </Text>
                      <Tag color='magenta'> {item.desk} </Tag>
                      <Text type='secondary'>Agent </Text>
                      <Tag color='volcano'> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
