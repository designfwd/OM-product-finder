import React, { Component } from "react";
import ReactDOM from "react-dom";

import './form.css';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      email:  '',
      curlPattern: '',
      porosity: '',
      curlShape: '',
      hairTexture: '',
      scalpCondition: '',
      stylingPreference: '',
    }
  }
  
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email,curlPattern, porosity,curlShape, hairTexture, scalpCondition, stylingPreference } = this.state
    alert(`Your registration detail: \n 
            curlPattern: ${curlPattern} \n 
            porosity: ${porosity} \n
            curlShape: ${curlShape} \n
            hairTexture: ${hairTexture}\n
            scalpCondition: ${scalpCondition} \n
            stylingPreference: ${stylingPreference} \n
            email: ${email}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 6? 7: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==0 && currentStep <= 7){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Back
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep > 0 && currentStep < 7){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Continue
        </button>        
      )
    }
    return null;
  }

  getStarted (){
    let currentStep = this.state.currentStep;
    if(currentStep == 0){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Get Started
        </button>        
      )
    }
    return null;
  }

  render() {    
    return (
      <React.Fragment>

      <form onSubmit={this.handleSubmit}>
      {/* 
          render the form steps and pass required props in
        */}
        <Step0 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
        />
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          curlPattern={this.state.curlPattern}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          porosity={this.state.porosity}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          curlShape={this.state.curlShape}
        />
        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          hairTexture={this.state.hairTexture}
        />
        <Step5
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          scalpCondition={this.state.scalpCondition}
        />
        <Step6
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          stylingPreference={this.state.stylingPreference}
        />        
        <Step7
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
          stylingPreference={this.state.stylingPreference}
          scalpCondition={this.state.scalpCondition}
          hairTexture={this.state.hairTexture}
          curlShape={this.state.curlShape}
          porosity={this.state.porosity}
          curlPattern={this.state.curlPattern}
        />        
        {this.getStarted()}
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
      );
    }
}



function Step0(props) {
  if (props.currentStep !== 0) {
    return null
  } 
  return(
    <div class="content-container">
      <img src="./images/om-logo-blue-sm.png" />
      <h2>We speak hair!</h2>
      <h2>Your hair is talking and we’re listening.</h2>
      <div class="copy">Healthy hair is happy hair.  Find your Hair Type Personality™ and help your hair live its best life.</div> 
    </div>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-curl-pattern.png" />
      <h2>What's Your Curl Patter?</h2>
      <div class="copy">
        The number of curls that occur along a 1” section of hair. Have your hair in <a href="#" target="_blank">locs</a> or a <a href="#" target="_blank">protective style</a>? Click these links for product recommendations. 
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="s2w" 
        name="curlPattern" 
        value="StraightToWavy"
        onClick={props.handleChange}
      />
      <label for="s2w">Straight To Wavy</label>

      <input
        className="form-control" 
        type="radio" 
        id="lc" 
        name="curlPattern" 
        value="LooseCurls"
        onClick={props.handleChange}
      />
      <label for="lc">Loose Curls</label>

      <input
        className="form-control" 
        type="radio" 
        id="tc" 
        name="curlPattern" 
        value="TightCurls"
        onClick={props.handleChange}
      />
      <label for="s2w">Tight Curls</label>

    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-porosity.png" />
      <h2>What's Your Porosity</h2>
      <div class="copy">
        Porosity refers to the degree to which your hair is able to absorb moisture and product 
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="m2lp" 
        name="porosity" 
        value="MediumToLowPorosity"
        onClick={props.handleChange}
      />
      <label for="s2w">Medium to Low Porosity</label>

      <input
        className="form-control" 
        type="radio" 
        id="m2hp" 
        name="porosity" 
        value="MediumToHighPorosity"
        onClick={props.handleChange}
      />
      <label for="lc">Medium to High Porosity</label>
    </div>
  );
}
function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-curl-shape.png" />
      <h2>What's Your Curl Shape?</h2>
      <div class="copy">
        The Three-dimensional appearance of a curl or wave.
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="sshape" 
        name="curlShape" 
        value="s-shape"
        onClick={props.handleChange}
      />
      <label for="sshape">'S' Shape</label>

      <input
        className="form-control" 
        type="radio" 
        id="spiral" 
        name="curlShape" 
        value="spiral"
        onClick={props.handleChange}
      />
      <label for="lc">Spiral</label>

      <input
        className="form-control" 
        type="radio" 
        id="singleStrand" 
        name="curlShape" 
        value="singleStrand"
        onClick={props.handleChange}
      />
      <label for="singleStrand">Single Strand</label>
    </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-texture.png" />
      <h2>What's Your Hair Texture?</h2>
      <div class="copy">
        The width of your individual strands of hair ranging from less than 60 microns to 80 microns in diameter.
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="fine" 
        name="hairTexture" 
        value="Fine"
        onClick={props.handleChange}
      />
      <label for="fine">Fine</label>

      <input
        className="form-control" 
        type="radio" 
        id="medium" 
        name="hairTexture" 
        value="medium"
        onClick={props.handleChange}
      />
      <label for="medium">Medium</label>

      <input
        className="form-control" 
        type="radio" 
        id="coarse" 
        name="hairTexture" 
        value="coarse"
        onClick={props.handleChange}
      />
      <label for="coarse">Coarse</label>
    </div>
  );
}

function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-scalp-condition.png" />
      <h2>What's Your Scalp Condition?</h2>
      <div class="copy">
        Healthy scalps grow healthy Hair! Pick the option that best describes your scalp
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="sensitive" 
        name="scalpCondition" 
        value="sensitive"
        onClick={props.handleChange}
      />
      <label for="sensitive">Sensitive</label>

      <input
        className="form-control" 
        type="radio" 
        id="irritated" 
        name="scalpCondition" 
        value="irritated"
        onClick={props.handleChange}
      />
      <label for="irritated">Irritated</label>

      <input
        className="form-control" 
        type="radio" 
        id="flaking" 
        name="scalpCondition" 
        value="flaking"
        onClick={props.handleChange}
      />
      <label for="flaking">Flaking</label>

      <input
        className="form-control" 
        type="radio" 
        id="tight" 
        name="scalpCondition" 
        value="tight"
        onClick={props.handleChange}
      />
      <label for="tight">Tight</label>

      <input
        className="form-control" 
        type="radio" 
        id="supple" 
        name="scalpCondition" 
        value="supple"
        onClick={props.handleChange}
      />
      <label for="supple">Supple</label>
    </div>
  );
}

function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <div className="form-group">
      <p>Step {props.currentStep} of 6</p> 
      
      <img src="./images/icon-hair-styling-preference.png" />
      <h2>What's Your Styling Preference?</h2>
      <div class="copy">
        Which of these profiles best describes your styling routine?
      </div> 

      <input
        className="form-control" 
        type="radio" 
        id="nwnr" 
        name="stylingPreference" 
        value="naturalWithNoRefreshing"
        onClick={props.handleChange}
      />
      <label for="nwnr">Natural with No Refreshing</label>

      <input
        className="form-control" 
        type="radio" 
        id="nwsr" 
        name="stylingPreference" 
        value="naturalWithSomeRefreshing"
        onClick={props.handleChange}
      />
      <label for="nwsr">Natural with Some Refreshing</label>

      <input
        className="form-control" 
        type="radio" 
        id="ohs" 
        name="stylingPreference" 
        value="occasionalHeatStyling"
        onClick={props.handleChange}
      />
      <label for="ohs">Flaking</label>

      <input
        className="form-control" 
        type="radio" 
        id="volumized" 
        name="stylingPreference" 
        value="volumized"
        onClick={props.handleChange}
      />
      <label for="volumized">Volumized</label>

    </div>
  );
}

function Step7(props) {
  console.log(props);
  if (props.currentStep !== 7) {
    return null
  } 
  console.log(props.stylingPreference);
  var image = '';
  if(props.stylingPreference == "volumized")
    image = './images/icon-hair-warrior-queen.png';
  return(
    <React.Fragment>
    <div className="form-group">
      {}
        <img src={`${image}`} />
      <h2>What's Your Styling Preference?</h2>
      <div class="copy">
        Which of these profiles best describes your styling routine?
      </div> 
      <label htmlFor="email">Email</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        value={props.email}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Get My Detailed Results!</button>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))