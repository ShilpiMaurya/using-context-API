import React, { useContext } from "react";
const ShilpiContext = React.createContext(undefined);
const GrandChild = () => {
  const value = useContext(ShilpiContext);
  return (
    <>
      <h1>im grandchild</h1>
      <h5>{value}</h5>
    </>
  );
};
const Child = () => {
  return <GrandChild />;
};
function Practice(props) {
  return (
    <>
      <h1>Using Context API</h1>
      <ShilpiContext.Provider value="all man shall die">
        <Child />
      </ShilpiContext.Provider>
    </>
  );
}
export default Practice;
