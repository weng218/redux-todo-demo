import React from 'react'
import { Input, Button, List } from 'antd'

//presentational component, 
//only has a render function, it is stateless 
//can just make it a function, 
//dont need to call lifecucle methods, better for perfomance
const TodoListUI = (props)=>{
	return (
		<div style={{marginTop: '10px', marginLeft: '10px'}}>
			<div>
				<Input 
					value = {props.inputValue} 
					placeholder='todo' 
					style={{width: '300px', marginRight: '10px'}}
					onChange={props.handleInputChange}
				/>
				<Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
			</div>
			<List
				style={{marginTop: '10px', width: '300px'}}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => <List.Item onClick = {()=>{props.handleItemDelete(index)}}>{item}</List.Item>}
			/>
		</div>
	)
}

export default TodoListUI