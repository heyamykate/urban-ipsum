import React from 'react';

function Form (props) {
  return (
      <div className="form-wrapper">
        <form name="get-ipsum">
          <div className="form-sections">
            <div className="form-section">
              <div className="form-group">
                <label>How many paragraphs do you want?</label>
                <input type="text" placeholder="# Here" ref={ props.getRef }/>
              </div>
              <div className="form-group">
                <div onClick={ props.handleSubmit } className="btn">Get It</div>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
}

export default Form;
