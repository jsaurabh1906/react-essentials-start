//here buttons are used as extra jsx slots from Examples.jsx

export default function Tabs({ children, buttons, ButtonsContainer = "div" }) {
  //   const ButtonContainer = buttonsContainer;
  return (
    <>
      {/* <menu>{buttons}</menu> */}
      {/* Using Components types dynamically */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
