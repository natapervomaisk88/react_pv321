const Button = ({name, action, color}) => {
    return (
    <>
        <button style={{backgroundColor: color}} 
        onClick={action}>{name}
        </button>
    </>);
};
export default Button;
