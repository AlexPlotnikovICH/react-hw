import React from 'react'
import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Space } from 'antd'

const { Title, Text } = Typography

function App() {
  const [submittedData, setSubmittedData] = useState(null)

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Title level={2}>User Information Form</Title>
      <Form layout='vertical' onFinish={values => setSubmittedData(values)}>
        <Form.Item
          label='Имя'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
        >
          <Input placeholder='Name' />
        </Form.Item>

        <Form.Item
          label='Описание'
          name='description'
          rules={[{ required: true, message: 'Пожалуйста, введите описание' }]}
        >
          <Input.TextArea placeholder='Description' rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {submittedData && (
        <Card title='Отправленные данные:' style={{ marginTop: '20px' }}>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  )
}
export default App
