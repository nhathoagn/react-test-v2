import React  from "react";
const Button = ({children, onClick, type, addClassNames}) => {
  let color = 'gray'
    if (type === 'error') color = 'red'
    return(
        <Button onClick={onClick} addClassNames={`bg-${color}-500 hover:bg-${color}-700 focus:outline-none py-3 px-6 text-white shadow rounded ${addClassNames}`}>
            {children}
        </Button>
    )
}
export default Button
