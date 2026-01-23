import React from 'react'
import { useState } from 'react'
import { Button, Card, Flex } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const ButtonCom = () => {

    const [loading, setLoading] = useState(false)

    const [count, setCount] = useState(0)

     const handleIncrease = () =>{
        setCount((prev) => prev + 1)
     }

    const cardStyle = {
        width: '620px',
    }

    const handleClick = (e) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <>
            <Flex justify='center'>
               
                <Card hoverable style={cardStyle}>
                    <Button type="primary"
                        loading={loading}
                        icon={<PoweroffOutlined />}
                        onClick={handleClick}
                    >Primary button</Button>
                </Card>

                <Card hoverable style={cardStyle}>
                    <ComponentA onIncrease={handleIncrease} count={count} />
                    <ComponentB count={count} />
                </Card>

            </Flex>

        

        </>
    )
}

function ComponentA({onIncrease, count}){
    return(
        <div>
            <h2>Welcome to Component A</h2>
            <p>Count: {count}</p>
            <Button type="primary" onClick={onIncrease}>Count Increase</Button>
        </div>
    )
}

function ComponentB({count}){

    return(
        <div>
            <h2>Welcome Component B</h2>
            <p>Count value: {count}</p>
        </div>
    )
}

export default ButtonCom