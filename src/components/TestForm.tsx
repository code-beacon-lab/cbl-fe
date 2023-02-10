// styled Component, Redux Example
import styled, {css} from "styled-components";
import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Redux/rootReducer";
import {addUser, User} from "../Redux/Slices/users";
import {Button, Container, Form, InputGroup} from "react-bootstrap";

// styled Component 사용 방법
let StyledTestForm = styled.div<{ done: boolean }>` /* typescript에서 사용 방법*/
  text-align: center;
  margin-top: 20px;
  color: #495057;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`;

const TestForm = () => {

  const users = useSelector<ReducerType, User[]>(state=> state.users);
  const dispatch = useDispatch();

  const [ name, setName ] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }

  const handleAddUser = (e:FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  }

  return (
      <>
          <Container fluid={"md"}>
            <StyledTestForm done>
                <Form  onSubmit={handleAddUser}>
                    <InputGroup className="mb-3">

                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type='text' value={name} onChange={handleChangeName}
                        />

                        <Button variant="outline-secondary" id="button-addon2" type='submit'>
                            Add User
                        </Button>

                    </InputGroup>
                </Form>

              {
                users.map(user => (
                    <div key = { user.id }>{ user.name }</div>
                ))
              }
            </StyledTestForm>
          </Container>
      </>
  )
}

export default TestForm;