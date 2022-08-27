import { cloneElement } from 'react';

export default function Familia(props) {
  return (
    <div>
      {props.children.map((child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
}
