import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);

  const leave = () => {
    console.log('salir');
  };

  const nextTicket = () => {
    console.log('next');
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Jorge</Title>
          <Text>You are working at the desk: </Text>
          <Text type='success'>5</Text>
        </Col>

        <Col span={4}>
          <Button shape='round' type='primary' danger onClick={leave}>
            <CloseCircleOutlined />
            Leave
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Is attending the ticket number: </Text>
          <Text style={{ fontSize: 30 }} type='danger'>
            55
          </Text>
        </Col>
      </Row>

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
