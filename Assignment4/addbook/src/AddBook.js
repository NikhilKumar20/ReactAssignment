import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form , FormGroup , Label , Input , Button}  from 'reactstrap'

const AddBook = () => {
  const navigate=useNavigate()
  const [bookdetails , setBookdetials]=useState({title:'' , author:'', gerne:''})
  const clickHandler=(e)=>{
    e.preventDefault();
    navigate("/display" , {state:{name:bookdetails.author}})
}
const onChangeHandler = (e) => {
    setBookdetials({ ...bookdetails, [e.target.name]: e.target.value })
}
  return (
    <div className='container mx-2 my-3 'style={{width:'50%' , justifyContent:'center'}} >
<h1>Add A Book</h1>
        <Form>
  <FormGroup>
    <Label for="title">
      Title:
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="Enter the title"
      type="text"
      value={bookdetails.title}
    onChange={onChangeHandler}
    />
  </FormGroup>
  <FormGroup>
    <Label for="author">
      Author:
    </Label>
    <Input
      id="author"
      name="author"
      placeholder="Enter the  author"
      type="text"
      value={bookdetails.author}
      onChange={onChangeHandler}
    />
  </FormGroup>
  <FormGroup>
    <Label for="gerne">
      Gerne:
    </Label>
    <Input
      id="gerne"
      name="gerne"
      placeholder="Enter the  gerne"
      type="text"
      value={bookdetails.gerne}
      onChange={onChangeHandler}
    />
  </FormGroup>
  <Button  color="success" onClick={(e)=>{clickHandler(e)}}>
    Add Book
  </Button>
  </Form>
    </div>
  )
}

export default AddBook