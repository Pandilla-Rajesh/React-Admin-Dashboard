import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

const FieldArray = () =>{

    const [fields, setFields] = useState([
        {name:'userName', value:''},
        {name:'email', value:''},
        {password:'password', value:''},
    ])

    const handleChange=(index, newValue)=>{

        const upDatedValues = [...fields]
        upDatedValues[index].value = newValue
        setFields(upDatedValues)
        console.log(upDatedValues)
    }

    return(

        <section>
            <Container>
                <Row>
                    {fields.map((field, index)=>(
                        <Col lg={4} md={3} sm={2} key={index}>
                            <Card className='p-3'>
                                <CardTitle>
                                    <label>{field.name}</label>
                                </CardTitle>
                                <CardBody>
                                    <InputGroup>
                                       <FormControl value={field.value} 
                                         type={field.name === "password" ? "password" : "text"}
                                        onChange={(e) =>{
                                            const upDated = [...fields]
                                            upDated[index].value = e.target.value
                                            setFields(upDated)
                                        }}
                                       />
                                    </InputGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        // <React.Fragment>
        //     <h2>Welcome to the field array component</h2>
        //     <div>
        //         {fields.map((field, index) => (
        //             <div key={index}>
        //                 <label htmlFor="">{field.name}</label>
        //                 <input type="text" value={field.value} className='form-control' 
        //                 onChange={(e)=> handleChange(index, e.target.value)}/>
        //             </div>
        //         ))}
        //     </div>
        // </React.Fragment>
    )
}

export default FieldArray