import { UserOutlined } from '@ant-design/icons'
import { Card, Flex, Input, Select } from 'antd'
import React from 'react'

const InputCom = () =>{


    const names = ['Rajesh', 'Ushasri', 'Aadhya', 'Arjun', 'Anasurya', 'Sathyanarayana']


    return(
        <>
            <Flex justify='center' gap={10}>
                
                <Card>
                    <Input.Search placeholder='Name'
                     maxLength={10}
                     prefix={<UserOutlined/>}
                     allowClear
                    >
                    </Input.Search>
                </Card>

                <Card>
                    <Input placeholder='User Name'
                    allowClear
                    prefix={<UserOutlined/>}
                    >
                    </Input>
                </Card>

                {/* select--option */}

                <Select placeholder='select name' style={{width:'25%', marginBlock:'20px', paddingBlock:'0px'}}
                maxTagCount={3} mode='multiple' allowClear
                >
                    {names.map((user, index)=>{
                        return <Select.Option value={user} key={index}>
                        </Select.Option>
                    })}
                </Select>

                {/* end */}

            </Flex>
        </>
    )
}
export default InputCom