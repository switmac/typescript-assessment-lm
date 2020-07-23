import React, { FC } from "react";

interface IProps {
  name: string;
  age: number;
  onClick(): void;
}

export const App: FC<IProps> = ({ name, age, onClick }) => (
  <div className="ui container">
    <div className="ui row">
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={onClick} className="ui button primary">
        Generate
      </button>
    </div>
  </div>
);
