import React from 'react'

const StepList = ({todo_id, steps, receiveStep}) => {
  const stepLi = steps.map((step) => {
    return <StepListItem key={steps.id} step={step} receiveStep={receiveSteps} />;
  });

  return (
    <>
      <TodoForm receiveTodo={props.receiveTodo} />
      <ul>{todoLi}</ul>
    </>
  );
};

export default StepList;