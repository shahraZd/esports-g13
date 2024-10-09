import Head from "next/head";
import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
} from "antd";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function Partner() {
  return (
    <div>
      <Head>
        <title>Become a Partner</title>
      </Head>

      <Form
        {...formItemLayout}
        variant="filled"
        size="large"
        style={{
          maxWidth: 600,
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              label="Input"
              name="Input"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="InputNumber"
              name="InputNumber"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input"
          name="Input"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="TextArea"
          name="TextArea"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Partner;
