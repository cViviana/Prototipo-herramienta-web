import React,{useState} from "react";
import Speedometer from './Speedometer';

const getFormattedValue = (value) => `${value.toFixed(2)}`;

const EvaluationRecommendations = ({ description, recommendationsData }) =>{
  const [checkedState, setCheckedState] = useState(
    new Array(recommendationsData.length).fill(false)
  );

  const [values, setValues] = useState(
    new Array(recommendationsData.length).fill(0)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index)=>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const updatedValues = values.map((item, index) =>
      index === position ? (updatedCheckedState[index] ? recommendationsData[index].value : 0) : item
    );
    setValues(updatedValues);

    const totalValue = updatedValues.reduce((sum, currentValue) => sum + currentValue, 0);
    setTotal(totalValue);
  };

  return(
    <div>
      <p className="description">{description}</p>
      <div className="evaluation">
        <ul className="recommendations-list">
          {recommendationsData.map(({ name, value }, index) => {
            return (
              <li key={index}>
                <div className="recommendations-list-item">
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="right-section">{getFormattedValue(values[index])}</div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="recommendations-list-item">
              <div className="left-section">Total:</div>
              <div className="right-section">{getFormattedValue(total)}</div>
            </div>
          </li>
        </ul>
        <Speedometer value={total*10} />
      </div>
      
    </div>
  );
}

export default EvaluationRecommendations;