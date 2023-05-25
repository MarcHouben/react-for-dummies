const Button = ({ text, action }) => {
  const handler = () => {
    action();
  };

  return <button onClick={() => handler()}>{text}</button>;
};

export default Button;
