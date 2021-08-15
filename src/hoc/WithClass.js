import React from "react";
// method :1 of creatinnh a HOC
// const withClass = (props)=>(
//     <div className={props.classes}>{props.children}</div>
// );

// export default withClass;

// method :2 of creatinnh a HOC(its not an func comp its an fuction returing an functional compi)
const withClass = (WrappedComponent,className)=>{
    return(
        (props)=>(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        ))};
        

export default withClass;