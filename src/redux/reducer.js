import { applyMiddleware, createStore } from "redux";
import swal from "sweetalert";
import Thunk from "redux-thunk";
const initalState = {
  leftValue: "",
  rightValue: "",
  opration: "",
  result: "",
};

const reducer = (state = initalState, action) => {
  function valuClear() {
    return {
      ...state,
      leftValue: "",
      rightValue: "",
      opration: "",
      result: "",
    };
  }
  switch (action.type) {
    case "+":
      if (state.leftValue) {
        return {
          ...state,
          opration: "+",
        };
      }
      break;
    case "-":
      if (state.leftValue) {
        return {
          ...state,
          opration: "-",
        };
      }
      break;
    case "/":
      if (state.leftValue) {
        return {
          ...state,
          opration: "/",
        };
      }
      break;
    case "*":
      if (state.leftValue) {
        return {
          ...state,
          opration: "*",
        };
      }
      break;
    case "AC":
      return valuClear();
    case state.rightValue && "=":
      if (state.result) {
        swal("Opration has been done", "please clear previous values!");
        return state;
      } else {
        switch (state.opration) {
          case "+":
            return {
              ...state,
              result: parseInt(state.leftValue) + parseInt(state.rightValue),
            };
          case "-":
            return {
              ...state,
              result: parseInt(state.leftValue) - parseInt(state.rightValue),
            };
          case "*":
            return {
              ...state,
              result: parseInt(state.leftValue) * parseInt(state.rightValue),
            };
          case "/":
            return {
              ...state,
              result: parseInt(state.leftValue) / parseInt(state.rightValue),
            };
          default:
        }
      }
      break;
    case "number":
      if (state.opration) {
        return {
          ...state,
          rightValue: (state.rightValue += action.payload),
        };
      }

      if (!state.leftValue) {
        return {
          ...state,
          leftValue: action.payload,
        };
      } else {
        return {
          ...state,
          leftValue: (state.leftValue += action.payload),
        };
      }

    default:
      return state;
  }
};
const midlleWare = [Thunk];
export const store = createStore(reducer, applyMiddleware(...midlleWare));
