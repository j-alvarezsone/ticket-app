import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
export const CreateTicket = () => {
  const newTicket = () => {
    console.log('new ticket');
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

      <Row justify='center' style={{ marginTop: '100px' }}>
        <Col span={14} style={{ textAlign: 'center' }}>
          <Title level={4}>Your number</Title>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
