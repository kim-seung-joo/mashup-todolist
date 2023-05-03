import React from "react";
import styled from "styled-components";
import Todoitem from "./todoitem";



const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px, 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: ;
`

function TodoList(){
    return(
    <TodoListBlock>
        <Todoitem text="프로젝트 생성하기" done={true}/>
        <Todoitem text="컨포넌트 스타일" done={true} />
        <Todoitem text="Context 만들기" done={false}/>
        <Todoitem text="프로젝트 생성하기" done={false}/>
    </TodoListBlock>
    
    )
}

export default TodoList;