import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallingNum } from "../redux/action";
import "./calculator.css";
export default function Calculator() {
  // state area

  const { result, leftValue, rightValue, opration } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  return (
    <div className="cal">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mx-auto my-5">
            <div
              className="box-cal shadow-lg"
              style={{ backgroundImage: "url(./img/texture.jpg)" }}
            >
              <div className="inputs_number p-2 px-3 rounded-pill shadow-sm text-end text-white">
                {/* <h6 className="mb-0"> 87.5+45</h6> */}
                <h6 className="mb-0">
                  {!rightValue && !leftValue
                    ? "0" //if
                    : !rightValue //else
                    ? leftValue //if
                    : result //else
                    ? result //if
                    : `${leftValue}${opration}${rightValue}`}
                </h6>
              </div>
              <div className="oprations_btn d-flex px-2 mt-3 justify-content-between">
                <div className="btn">
                  <input
                    type="button"
                    value={"*"}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"-"}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"/"}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"+"}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
              </div>
              <div className="number_btn d-flex px-2 mt-3 justify-content-between">
                <div className="btn">
                  <input
                    type="button"
                    value={"1"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"2"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"3"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"4"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
              </div>
              <div className="number_btn d-flex px-2 mt-3 justify-content-between">
                <div className="btn">
                  <input
                    type="button"
                    value={"5"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"6"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"7"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"8"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
              </div>
              <div className="number_btn d-flex px-2 mt-3 justify-content-between">
                <div className="btn">
                  <input
                    type="button"
                    value={"9"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn">
                  <input
                    type="button"
                    value={"0"}
                    onClick={(e) => dispatch(CallingNum(e.target.value))}
                  />
                </div>
                <div className="btn bg-primary">
                  <input
                    type="button"
                    value={"="}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
                <div className="btn bg-danger   ">
                  <input
                    type="button"
                    value={"AC"}
                    onClick={(e) => dispatch({ type: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
