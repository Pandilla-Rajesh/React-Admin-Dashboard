import { Card, Col, Divider, Flex, Row } from 'antd'
import React from 'react'

const AntCols = () => {

    const style = {
        background: '#0092ff',
        padding: '8px 0px'
    }

    return (
        <>
            <Flex justify='center'>
                <Card style={{ marginBlock: '15px' }}>
                    <h1>Welcome to the Ant Design Columns</h1>
                    <Divider orientation='center'>
                        Ant Design Columns
                    </Divider>
                </Card>
            </Flex>
            <Row gutter={{ x: 8, md: 16, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>

            <Divider orientation="left">sub-element align left</Divider>
            <Row justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

        </>
    )
}

export default AntCols