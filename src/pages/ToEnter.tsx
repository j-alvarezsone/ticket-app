import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export const ToEnter = () => {
  useHideMenu(false);

  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/desk');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Title level={2}>Enter</Title>
      <Text>Enter your name and desk number</Text>
      <Divider />
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Agent name'
          name='agent'
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Desk'
          name='desk'
          rules={[{ required: true, message: 'Please input the desk number' }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'></Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' shape='round'>
            <SaveOutlined />
            Enter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
