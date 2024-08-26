import React from "react";

const higherOrderComponent = WrappedComponent => {
    class HOC extends React.Component {
        state = {
            isLoading: false
        };

   render() {
     return this.state.isLoading ? (
       <h1>Wait a moment...</h1>
     ) : (
       <WrappedComponent />
     );
   }
 }

 return HOC;
};

