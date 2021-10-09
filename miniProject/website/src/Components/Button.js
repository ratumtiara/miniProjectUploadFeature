import "../Styles/StepperBox.css";

export const StepperButton = ({ currentPage, idPage, title, onClick }) => (
  <button
    className={
      currentPage === idPage || idPage < currentPage
        ? "button"
        : "buttonInActive"
    }
    onClick={onClick}
  >
    <h4 style={{ color: "white" }}>{title}</h4>
  </button>
);

// import "../Styles/StepperBox.css";

// export const StepperButton = ({ currentPage, idPage, title, onClick }) => (
//   <button
//     className={
//       currentPage === idPage || idPage < currentPage
//         ? "button"
//         : "buttonInActive"
//     }
//     disabled={currentPage < idPage ? true : false}
//     onClick={onClick}
//   >
//     <h4 style={{ color: "white" }}>{title}</h4>
//   </button>
// );
