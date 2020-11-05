import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

import './form.css';
Modal.setAppElement('#root');
Modal.defaultStyles = {
  content: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate3D( -50%, -50%, 0 )'
  }
};

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
      showModal: false,
      showModaltc: false,
      showModallc: false,
      showModalm2lp: false,
      showModalm2hp: false,
      showModalSshaped: false,
      showModalSpiral: false,
      showModalSingleStrand: false,
      showModalFine: false,
      showModalMedium: false,
      showModalCoarse: false,
      showModalSensitive: false,
      showModalIrritated: false,
      showModalFlaking: false,
      showModalTightDry: false,
      showModalSupple: false,
      showModalNatWithNoRefreshing: false,
      showModalNatWithSomeRefreshing: false,
      showModalOccasionalHeat: false,
      showModalVolumized: false,
      hairType: '',  
    }
    //step 1
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleOpenModaltc = this.handleOpenModaltc.bind(this);
    this.handleCloseModaltc = this.handleCloseModaltc.bind(this);

    this.handleOpenModallc = this.handleOpenModallc.bind(this);
    this.handleCloseModallc = this.handleCloseModallc.bind(this);

    //step 2
    this.handleOpenModalm2lp = this.handleOpenModalm2lp.bind(this);
    this.handleCloseModalm2lp = this.handleCloseModalm2lp.bind(this);

    this.handleOpenModalm2hp = this.handleOpenModalm2hp.bind(this);
    this.handleCloseModalm2hp = this.handleCloseModalm2hp.bind(this);

    //step 3
    this.handleOpenModalSshaped = this.handleOpenModalSshaped.bind(this);
    this.handleCloseModalSshaped = this.handleCloseModalSshaped.bind(this);

    this.handleOpenModalSpiral = this.handleOpenModalSpiral.bind(this);
    this.handleCloseModalSpiral = this.handleCloseModalSpiral.bind(this);

    this.handleOpenModalSingleStrand = this.handleOpenModalSingleStrand.bind(this);
    this.handleCloseModalSinglStrand = this.handleCloseModalSinglStrand.bind(this);

    //step 4
    this.handleOpenModalFine = this.handleOpenModalFine.bind(this);
    this.handleCloseModalFine = this.handleCloseModalFine.bind(this);
    
    this.handleOpenModalMedium = this.handleOpenModalMedium.bind(this);
    this.handleCloseModalMedium = this.handleCloseModalMedium.bind(this);
    
    this.handleOpenModalCoarse = this.handleOpenModalCoarse.bind(this);
    this.handleCloseModalCoarse = this.handleCloseModalCoarse.bind(this);
    
    //step 5
    this.handleOpenModalSensitive = this.handleOpenModalSensitive.bind(this);
    this.handleCloseModalSensitive = this.handleCloseModalSensitive.bind(this);
    
    this.handleOpenModalIrritated = this.handleOpenModalIrritated.bind(this);
    this.handleCloseModalIrritated = this.handleCloseModalIrritated.bind(this);
    
    this.handleOpenModalFlaking = this.handleOpenModalFlaking.bind(this);
    this.handleCloseModalFlaking = this.handleCloseModalFlaking.bind(this);
    
    this.handleOpenModalTightDry = this.handleOpenModalTightDry.bind(this);
    this.handleCloseModalTightDry = this.handleCloseModalTightDry.bind(this);
    
    this.handleOpenModalSupple = this.handleOpenModalSupple.bind(this);
    this.handleCloseModalSupple = this.handleCloseModalSupple.bind(this);
  
    //step 6
    this.handleOpenModalNatWithNoRefreshing = this.handleOpenModalNatWithNoRefreshing.bind(this);
    this.handleCloseModalNatWithNoRefreshing = this.handleCloseModalNatWithNoRefreshing.bind(this);
    
    this.handleOpenModalNatWithSomeRefreshing = this.handleOpenModalNatWithSomeRefreshing.bind(this);
    this.handleCloseModalNatWithSomeRefreshing = this.handleCloseModalNatWithSomeRefreshing.bind(this);
    
    this.handleOpenModalOccasionalHeat = this.handleOpenModalOccasionalHeat.bind(this);
    this.handleCloseModalOccasionalHeat = this.handleCloseModalOccasionalHeat.bind(this);
    
    this.handleOpenModalVolumized = this.handleOpenModalVolumized.bind(this);
    this.handleCloseModalVolumized = this.handleCloseModalVolumized.bind(this);
  }
  //open modals
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleOpenModaltc () {
    this.setState({ showModaltc: true });
  }
  handleOpenModallc () {
    this.setState({ showModallc: true });
  }
  handleOpenModalm2lp () {
    this.setState({ showModalm2lp: true });
  }
  handleOpenModalm2hp () {
    this.setState({ showModalm2hp: true });
  }
  handleOpenModalSshaped() {
    this.setState({ showModalSshaped: true });
  }
  handleOpenModalSpiral () {
    this.setState({ showModalSpiral: true });
  }
  handleOpenModalSingleStrand () {
    this.setState({ showModalSingleStrand: true });
  }
  handleOpenModalFine () {
    this.setState({ showModalFine: true });
  }
  handleOpenModalMedium () {
    this.setState({ showModalMedium: true });
  }
  handleOpenModalCoarse () {
    this.setState({ showModalCoarse: true });
  }
  handleOpenModalSensitive () {
    this.setState({ showModalSensitive: true });
  }
  handleOpenModalIrritated () {
    this.setState({ showModalIrritated: true });
  }
  handleOpenModalFlaking () {
    this.setState({ showModalFlaking: true });
  }
  handleOpenModalTightDry () {
    this.setState({ showModalTightDry: true });
  }
  handleOpenModalSupple () {
    this.setState({ showModalSupple: true });
  }
  handleOpenModalNatWithNoRefreshing () {
    this.setState({ showModalNatWithNoRefreshing: true });
  }
  handleOpenModalNatWithSomeRefreshing () {
    this.setState({ showModalNatWithSomeRefreshing: true });
  }
  handleOpenModalOccasionalHeat () {
    this.setState({ showModalOccasionalHeat: true });
  }
  handleOpenModalVolumized () {
    this.setState({ showModalVolumized: true });
  }
  
  //close modals
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  handleCloseModaltc () {
    this.setState({ showModaltc: false });
  }
  handleCloseModallc () {
    this.setState({ showModallc: false });
  } 
  handleCloseModalm2lp () {
    this.setState({ showModalm2lp: false });
  } 
  handleCloseModalm2hp () {
    this.setState({ showModalm2hp: false });
  }
  handleCloseModalSshaped () {
    this.setState({ showModalSshaped: false });
  } 
  handleCloseModalSpiral () {
    this.setState({ showModalSpiral: false });
  } 
  handleCloseModalSinglStrand () {
    this.setState({ showModalSingleStrand: false });
  }
  handleCloseModalFine () {
    this.setState({ showModalFine: false });
  }
  handleCloseModalMedium () {
    this.setState({ showModalMedium: false });
  }
  handleCloseModalCoarse () {
    this.setState({ showModalCoarse: false });
  }
  handleCloseModalSensitive () {
    this.setState({ showModalSensitive: false });
  }
  handleCloseModalIrritated () {
    this.setState({ showModalIrritated: false });
  }
  handleCloseModalFlaking () {
    this.setState({ showModalFlaking: false });
  }
  handleCloseModalTightDry () {
    this.setState({ showModalTightDry: false });
  }
  handleCloseModalSupple () {
    this.setState({ showModalSupple: false });
  }
  
  handleCloseModalNatWithNoRefreshing () {
    this.setState({ showModalNatWithNoRefreshing: false });
  }
  handleCloseModalNatWithSomeRefreshing () {
    this.setState({ showModalNatWithSomeRefreshing: false });
  }
  handleCloseModalOccasionalHeat () {
    this.setState({ showModalOccasionalHeat: false });
  }
  handleCloseModalVolumized () {
    this.setState({ showModalVolumized: false });
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email,curlPattern, porosity,curlShape, hairTexture, scalpCondition, stylingPreference } = this.state;

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
    let curlPattern = this.state.curlPattern;
    let porosity = this.state.porosity;

    if(currentStep == 2) {
      if((curlPattern == 'TightCurls') && (porosity == 'MediumToLowPorosity'))
        currentStep++;
      else
        currentStep +=2;
    }else{
      currentStep = currentStep >= 6? 7: currentStep+1;
    }
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    let curlPattern = this.state.curlPattern;
    let porosity = this.state.porosity;

    if(currentStep == 4) {
      if((curlPattern == 'TightCurls') && (porosity == 'MediumToLowPorosity'))
        currentStep--;
      else
        currentStep -=2;
    }else{
      currentStep = currentStep <= 1? 1: currentStep - 1
    }    
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==0 && currentStep < 7){
      return (
        <button 
          className="btn btn-secondary form-slide__button form-slide__button--prev" 
          type="button" onClick={this._prev}>
        &larr;  Back
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
          className="btn btn-primary form-slide__button form-slide__button--next" 
          type="button" onClick={this._next}>
        Continue  &rarr;
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
          className="btn btn-primary form-slide__button form-slide__button--start" 
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

      <form class="form-slide__form" onSubmit={this.handleSubmit}>
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

          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
          
          handleOpenModaltc={this.handleOpenModaltc}
          handleCloseModaltc={this.handleCloseModaltc}
          showModaltc={this.state.showModaltc}

          handleOpenModallc={this.handleOpenModallc}
          handleCloseModallc={this.handleCloseModallc}
          showModallc={this.state.showModallc}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          porosity={this.state.porosity}

          handleOpenModalm2lp={this.handleOpenModalm2lp}
          handleCloseModalm2lp={this.handleCloseModalm2lp}
          showModalm2lp={this.state.showModalm2lp}
          
          handleOpenModalm2hp={this.handleOpenModalm2hp}
          handleCloseModalm2hp={this.handleCloseModalm2hp}
          showModalm2hp={this.state.showModalm2hp}          
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          curlShape={this.state.curlShape}

          handleOpenModalSshaped={this.handleOpenModalSshaped}
          handleCloseModalSshaped={this.handleCloseModalSshaped}
          showModalSshaped={this.state.showModalSshaped}
          
          handleOpenModalSpiral={this.handleOpenModalSpiral}
          handleCloseModalSpiral={this.handleCloseModalSpiral}
          showModalSpiral={this.state.showModalSpiral}

          handleOpenModalSingleStrand={this.handleOpenModalSingleStrand}
          handleCloseModalSinglStrand={this.handleCloseModalSinglStrand}
          showModalSingleStrand={this.state.showModalSingleStrand}
        />
        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          hairTexture={this.state.hairTexture}
          
          handleOpenModalFine={this.handleOpenModalFine}
          handleCloseModalFine={this.handleCloseModalFine}
          showModalFine={this.state.showModalFine}

          handleOpenModalMedium={this.handleOpenModalMedium}
          handleCloseModalMedium={this.handleCloseModalMedium}
          showModalMedium={this.state.showModalMedium}

          handleOpenModalCoarse={this.handleOpenModalCoarse}
          handleCloseModalCoarse={this.handleCloseModalCoarse}
          showModalCoarse={this.state.showModalCoarse}
        />
        <Step5
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          scalpCondition={this.state.scalpCondition}

          handleOpenModalSensitive={this.handleOpenModalSensitive}
          handleCloseModalSensitive={this.handleCloseModalSensitive}
          showModalSensitive={this.state.showModalSensitive}

          handleOpenModalIrritated={this.handleOpenModalIrritated}
          handleCloseModalIrritated={this.handleCloseModalIrritated}
          showModalIrritated={this.state.showModalIrritated}

          handleOpenModalFlaking={this.handleOpenModalFlaking}
          handleCloseModalFlaking={this.handleCloseModalFlaking}
          showModalFlaking={this.state.showModalFlaking}

          handleOpenModalTightDry={this.handleOpenModalTightDry}
          handleCloseModalTightDry={this.handleCloseModalTightDry}
          showModalTightDry={this.state.showModalTightDry}

          handleOpenModalSupple={this.handleOpenModalSupple}
          handleCloseModalSupple={this.handleCloseModalSupple}
          showModalSupple={this.state.showModalSupple}
        />
        <Step6
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          stylingPreference={this.state.stylingPreference}

          handleOpenModalNatWithSomeRefreshing={this.handleOpenModalNatWithSomeRefreshing}
          handleCloseModalNatWithSomeRefreshing={this.handleCloseModalNatWithSomeRefreshing}
          showModalNatWithSomeRefreshing={this.state.showModalNatWithSomeRefreshing}

          handleOpenModalNatWithNoRefreshing={this.handleOpenModalNatWithNoRefreshing}
          handleCloseModalNatWithNoRefreshing={this.handleCloseModalNatWithNoRefreshing}
          showModalNatWithNoRefreshing={this.state.showModalNatWithNoRefreshing}

          handleOpenModalOccasionalHeat={this.handleOpenModalOccasionalHeat}
          handleCloseModalOccasionalHeat={this.handleCloseModalOccasionalHeat}
          showModalOccasionalHeat={this.state.showModalOccasionalHeat}

          handleOpenModalVolumized={this.handleOpenModalVolumized}
          handleCloseModalVolumized={this.handleCloseModalVolumized}
          showModalVolumized={this.state.showModalVolumized}
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
    <div class="content-container form-slide form-slide--zero">
      <img class="form-slide__icon" src="./images/om-logo-blue-sm.png" />
      <h2 class="form-slide__headline">
        We speak hair!<br/>Your hair is talking and we’re listening.
      </h2>
      <div class="copy form-slide__body">
        Healthy hair is happy hair.  Find your Hair Type Personality™ and help your hair live its best life.
      </div> 
    </div>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--one">
      <p class="form-slide__step">Step {props.currentStep} of 6</p>

      <img class="form-slide__icon" src="./images/icon-hair-curl-pattern.png" />
      <h2 class="form-slide__headline">
        What's Your Curl Pattern?
      </h2>
      <div class="copy form-slide__body">
        The number of curls that occur along a 1” section of hair. Have your hair in <a class="form-slide__link" href="#" target="_blank">locs</a> or a <a class="form-slide__link" href="#" target="_blank">protective style</a>? Click these links for product recommendations. 
      </div> 

      <div class="form-slide__inputs">
        <div class="form-slide__option">
          <input
            className="form-control form-slide__radio" 
            type="radio" 
            id="s2w" 
            name="curlPattern" 
            value="StraightToWavy"
            onClick={props.handleChange}
          />
          <span class="form-slide__control"></span>
          <label class="form-slide__label" for="s2w">Straight To Wavy</label>
          <a class="form-slide__trigger" onClick={props.handleOpenModal}>
            i
          </a>
          <Modal 
            isOpen={props.showModal}
            contentLabel="Minimal Modal Example"
          >
            <h2 class="form-slide__headline form-slide__headline--modal">
              Straight to Wavy
            </h2>
            <p class="form-slide__body form-slide__body--modal">
              Less than one curl per inch.  Hair ranges from perfectly straight to slight texture and is flat to the head when wet. Not much change in length when hair is pulled taught from its natural resting position.
            </p>
            <a class="form-slide__close" onClick={props.handleCloseModal}>X</a>
          </Modal>
        </div>

        <div class="form-slide__option">
          <input
            className="form-control form-slide__radio" 
            type="radio" 
            id="lc" 
            name="curlPattern" 
            value="LooseCurls"
            onClick={props.handleChange}
          />
          <span class="form-slide__control"></span>
          <label class="form-slide__label" for="lc">Loose Curls</label>
          <a class="form-slide__trigger" onClick={props.handleOpenModallc}>i</a>
          <Modal
            isOpen={props.showModallc}
            contentLabel="Minimal Modal Example"
          >
            <h2 class="form-slide__headline form-slide__headline--modal">
              Loose Curls
            </h2>
            <p class="form-slide__body form-slide__body--modal">
              One to two curls per inch.  Some length change when hair is pulled taught from its natural resting position. You can easily pull your fingers through your curls when they are dry.
            </p>
            <a class="form-slide__close" onClick={props.handleCloseModallc}>X</a>
          </Modal>
        </div>

        <div class="form-slide__option">
          <input
            className="form-control form-slide__radio" 
            type="radio" 
            id="tc" 
            name="curlPattern" 
            value="TightCurls"
            onClick={props.handleChange}
          />
          <span class="form-slide__control"></span>
          <label class="form-slide__label" for="s2w">Tight Curls</label>
          <a class="form-slide__trigger" onClick={props.handleOpenModaltc}>i</a>
          <Modal
            isOpen={props.showModaltc}
            contentLabel="Minimal Modal Example"
          >
            <h2 class="form-slide__headline form-slide__headline--modal">
              Tight Curls
            </h2>
            <p class="form-slide__body form-slide__body--modal">
              More than two curls per inch.  Significant length change when hair is pulled taught from its natural resting position.  Challenging or impossible to pull your fingers through hair once it is and dry.
            </p>
            <a class="form-slide__close" onClick={props.handleCloseModaltc}>X</a>
          </Modal>
        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--two">
      <p class="form-slide__step">Step {props.currentStep} of 6</p> 

      <img class="form-slide__icon" src="./images/icon-hair-porosity.png" />
      <h2 class="form-slide__headline">What's Your Porosity</h2>
      <div class="copy form-slide__body">
        Porosity refers to the degree to which your hair is able to absorb moisture and product 
      </div> 

      <div class="form-slide__inputs">
        <div class="form-slide__option">
          <input
            className="form-control form-slide__radio" 
            type="radio" 
            id="m2lp" 
            name="porosity" 
            value="MediumToLowPorosity"
            onClick={props.handleChange}
          />
          <span class="form-slide__control"></span>
          <label class="form-slide__label" for="s2w">Medium to Low Porosity</label>
          <a class="form-slide__trigger" onClick={props.handleOpenModalm2lp}>i</a>
          <Modal 
            isOpen={props.showModalm2lp}
            contentLabel="Minimal Modal Example"
          >
            <h2 class="form-slide__headline form-slide__headline--modal">
              Medium to Low Porosity
            </h2>
            <p class="form-slide__body form-slide__body--modal">
              Hair is slow to absorb water and product,  prone to build-up or greasiness, and does not experience a dramatic change in humidity.
            </p>
              <a class="form-slide__close" onClick={props.handleCloseModalm2lp}>X</a>
          </Modal>
        </div>
    
        <div class="form-slide__option">
          <input
            className="form-control form-slide__radio" 
            type="radio" 
            id="m2hp" 
            name="porosity" 
            value="MediumToHighPorosity"
            onClick={props.handleChange}
          />
          <span class="form-slide__control"></span>
          <label class="form-slide__label" for="lc">Medium to High Porosity</label>
          <a class="form-slide__trigger" onClick={props.handleOpenModalm2hp}>i</a>
          <Modal 
            isOpen={props.showModalm2hp}
            contentLabel="Minimal Modal Example"
          >
            <h2 class="form-slide__headline form-slide__headline--modal">
              Medium to High Porosity
            </h2>
            <p class="form-slide__body form-slide__body--modal">
              Hair readily absorbs moisture and product, may look dull after a few days, and gets poofy and frizzy in humidity.
            </p>
            <a class="form-slide__close" onClick={props.handleCloseModalm2hp}>X</a>
          </Modal>
        </div>
      </div>
    </div>
  );
}
function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--three">
      <p class="form-slide__step">Step {props.currentStep} of 6</p> 
      
      <img class="form-slide__icon" src="./images/icon-hair-curl-shape.png" />
      <h2 class="form-slide__headline">What's Your Curl Shape?</h2>
      <div class="copy form-slide__body">
        The Three-dimensional appearance of a curl or wave.
      </div> 

      <div class="form-slide__option">
        <input
          className="form-control form-slide__radio" 
          type="radio" 
          id="sshape" 
          name="curlShape" 
          value="s-shape"
          onClick={props.handleChange}
        />
        <span class="form-slide__control"></span>
        <label class="form-slide__label" for="sshape">'S' Shape</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalSshaped}>i</a>
        <Modal 
          isOpen={props.showModalSshaped}
          contentLabel="Minimal Modal Example"
        >
          <h2 class="form-slide__headline form-slide__headline--modal">
            'S' Shape
          </h2>
          <p class="form-slide__body form-slide__body--modal">
            Clear curl ‘families’ that group in a repeating wave pattern.  May be loose or very tight.
          </p>
          <a class="form-slide__close" onClick={props.handleCloseModalSshaped}>X</a>
        </Modal>
      </div>

      <div class="form-slide__option">
        <input
          className="form-control form-slide__radio" 
          type="radio" 
          id="spiral" 
          name="curlShape" 
          value="spiral"
          onClick={props.handleChange}
        />
        <span class="form-slide__control"></span>
        <label class="form-slide__label" for="lc">Spiral</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalSpiral}>i</a>
        <Modal 
          isOpen={props.showModalSpiral}
          contentLabel="Minimal Modal Example"
        >
          <h2 class="form-slide__headline form-slide__headline--modal">
            Spiral
          </h2>
          <p class="form-slide__body form-slide__body--modal">
            Clear curl ‘families’ that that coil in a helix around a central axis. May be loose or very tight.
          </p>
          <a class="form-slide__close" onClick={props.handleCloseModalSpiral}>X</a>
        </Modal>
      </div>

      <div class="form-slide__option">
        <input
          className="form-control form-slide__radio" 
          type="radio" 
          id="singleStrand" 
          name="curlShape" 
          value="singleStrand"
          onClick={props.handleChange}
        />
        <span class="form-slide__control"></span>
        <label class="form-slide__label" for="singleStrand">Single Strand</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalSingleStrand}>i</a>
        <Modal
          isOpen={props.showModalSingleStrand}
          contentLabel="Minimal Modal Example"
        >
          <h2 class="form-slide__headline form-slide__headline--modal">
            Single Strand
          </h2>
          <p class="form-slide__body form-slide__body--modal">
            Independent strands that stand out from one another, do not easily group, and may be ‘s’ or spiral shaped. 
          </p>
          <a class="form-slide__close" onClick={props.handleCloseModalSinglStrand}>X</a>
        </Modal>
      </div>
    </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--four">
      <p class="form-slide__step">Step {props.currentStep} of 6</p> 

      <img class="form-slide__icon" src="./images/icon-hair-texture.png" />
      <h2 class="form-slide__headline">What's Your Hair Texture?</h2>
      <div class="copy form-slide__body">
        The width of your individual strands of hair ranging from less than 60 microns to 80 microns in diameter.
      </div> 

      <div class="form-slide__inputs">
        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="fine" 
          name="hairTexture" 
          value="Fine"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="fine">Fine</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalFine}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalFine}
          contentLabel="Minimal Modal Example"
        >
          Individual hairs are easy to feel between the fingers and are somewhat soft
          <a class="form-slide__close" onClick={props.handleCloseModalFine}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="medium" 
          name="hairTexture" 
          value="medium"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="medium">Medium</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalMedium}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalMedium}
          contentLabel="Minimal Modal Example"
        >
          Individual hairs are easy to feel between the fingers and are somewhat soft
          <a class="form-slide__close" onClick={props.handleCloseModalMedium}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="coarse" 
          name="hairTexture" 
          value="coarse"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="coarse">Coarse</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalCoarse}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalCoarse}
          contentLabel="Minimal Modal Example"
        >
          Individual hairs feel hard and substantial between the fingers.
          <a class="form-slide__close" onClick={props.handleCloseModalCoarse}>Close Modal</a>
        </Modal>
      </div>
    </div>
  );
}

function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--five">
      <p class="form-slide__step">Step {props.currentStep} of 6</p> 
      
      <img class="form-slide__icon" src="./images/icon-hair-scalp-condition.png" />
      <h2 class="form-slide__headline">What's Your Scalp Condition?</h2>
      <div class="copy form-slide__body">
        Healthy scalps grow healthy Hair! Pick the option that best describes your scalp
      </div> 

      <div class="form-slide__inputs">
        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="sensitive" 
          name="scalpCondition" 
          value="sensitive"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="sensitive">Sensitive</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalSensitive}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalSensitive}
          contentLabel="Minimal Modal Example"
        >
          Sore feeling, even when not restricted in a tight style.
          <a class="form-slide__close" onClick={props.handleCloseModalSensitive}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="irritated" 
          name="scalpCondition" 
          value="irritated"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="irritated">Irritated</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalIrritated}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalIrritated}
          contentLabel="Minimal Modal Example"
        >
          Visible redness and itching.
          <a class="form-slide__close" onClick={props.handleCloseModalIrritated}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="flaking" 
          name="scalpCondition" 
          value="flaking"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="flaking">Flaking</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalFlaking}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalFlaking}
          contentLabel="Minimal Modal Example"
        >
          Light colored flakes originating from the scalp (not product build up).
          <a class="form-slide__close" onClick={props.handleCloseModalFlaking}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="tight" 
          name="scalpCondition" 
          value="tight"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="tight">Tight</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalTightDry}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalTightDry}
          contentLabel="Minimal Modal Example"
        >
          Scalp does not move easily over the skull and feels almost glued down.
          <a class="form-slide__close" onClick={props.handleCloseModalTightDry}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="supple" 
          name="scalpCondition" 
          value="supple"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="supple">Supple</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalSupple}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalSupple}
          contentLabel="Minimal Modal Example"
        >
          Scalp moves easily over the skull and has some give when pressed with fingertips.
          <a class="form-slide__close" onClick={props.handleCloseModalSupple}>Close Modal</a>
        </Modal>      
      </div>
    </div>
  );
}

function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <div className="form-group form-slide form-slide--six">
      <p class="form-slide__step">Step {props.currentStep} of 6</p> 
      
      <img class="form-slide__icon" src="./images/icon-hair-styling-preference.png" />
      <h2 class="form-slide__headline">What's Your Styling Preference?</h2>
      <div class="copy form-slide__body">
        Which of these profiles best describes your styling routine?
      </div> 

      <div class="form-slide__inputs">
        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="nwnr" 
          name="stylingPreference" 
          value="naturalWithNoRefreshing"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="nwnr">Natural with No Refreshing</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalNatWithNoRefreshing}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalNatWithNoRefreshing}
          contentLabel="Minimal Modal Example"
        >
          No heat styling and minimal post-wash day styling. 
          <a class="form-slide__close" onClick={props.handleCloseModalNatWithNoRefreshing}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="nwsr" 
          name="stylingPreference" 
          value="naturalWithSomeRefreshing"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="nwsr">Natural with Some Refreshing</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalNatWithSomeRefreshing}>Trigger Modal</a>
        <Modal 
          className="form-slide__modal"
          isOpen={props.showModalNatWithSomeRefreshing}
          contentLabel="Minimal Modal Example"
        >
          No heat styling with some post-wash day styling to reshape waves and curls
          <a class="form-slide__close" onClick={props.handleCloseModalNatWithSomeRefreshing}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="ohs" 
          name="stylingPreference" 
          value="occasionalHeatStyling"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="ohs">Occational Heat Styling</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalOccasionalHeat}>Trigger Modal</a>
        <Modal 
          class="form-slide__modal"
          isOpen={props.showModalOccasionalHeat}
          contentLabel="Minimal Modal Example"
        >
          Hair is blow dried and/or flat ironed once in a while.
          <a class="form-slide__close" onClick={props.handleCloseModalOccasionalHeat}>Close Modal</a>
        </Modal>

        <input
          className="form-control form-slide__control" 
          type="radio" 
          id="volumized" 
          name="stylingPreference" 
          value="volumized"
          onClick={props.handleChange}
        />
        <label class="form-slide__label" for="volumized">Volumized</label>
        <a class="form-slide__trigger" onClick={props.handleOpenModalVolumized}>Trigger Modal</a>
        <Modal 
          class="form-slide__modal"
          isOpen={props.showModalVolumized}
          contentLabel="Minimal Modal Example"
        >
          Hair is encouraged to fluff up for a soft, full look.
          <a class="form-slide__close" onClick={props.handleCloseModalVolumized}>Close Modal</a>
        </Modal>
      </div>
    </div>
  );
}

function Step7(props) {
  if (props.currentStep !== 7) {
    return null
  } 
  var image = '';
  var content = '';
  var title = '';
  var link = '';
  var hairType = '';
  var cottonCandyURLS = [
    'https://www.originalmoxie.com/cotton-candy-loose-curls-fine/',
    'https://www.originalmoxie.com/cotton-candy-loose-curls-medium/',
    'https://www.originalmoxie.com/cotton-candy-loose-curls-coarse/',
    'https://www.originalmoxie.com/cotton-candy-straight-wavy-coarse/',
    'https://www.originalmoxie.com/cotton-candy-straight-wavy-medium/',
    'https://www.originalmoxie.com/cotton-candy-straight-wavy-fine/',
  ];
  var mermaidURLS = [
    'https://www.originalmoxie.com/mermaid-loose-curls-coarse/',
    'https://www.originalmoxie.com/mermaid-loose-curls-medium/',
    'https://www.originalmoxie.com/mermaid-loose-curls-fine/',
    'https://www.originalmoxie.com/mermaid-straight-wavy-coarse/',
    'https://www.originalmoxie.com/mermaid-straight-wavy-medium/',
    'https://www.originalmoxie.com/mermaid-straight-wavy-fine/',
  ];
  var shapeShifterURLS = [
    'https://www.originalmoxie.com/shape-shifter-s-curls/',
    'https://www.originalmoxie.com/shape-shifter-spiral-curls/',
    'https://www.originalmoxie.com/shape-shifter-single-strand/',
  ];  
  var warriorURLS = [
    'https://www.originalmoxie.com/warrior-queen-s-curls/',
    'https://www.originalmoxie.com/warrior-queen-spiral-curls/',
    'https://www.originalmoxie.com/warrior-queen-single-strand/',
  ]; 

  //if curlpattern = straight to wavy and hair perosity = medium to low goes to mermaid
  //if curlpattern = loose curls and perosity = medium to low goes to mermaid
  if((props.curlPattern == 'StraightToWavy' && props.porosity == 'MediumToLowPorosity') ||(props.curlPattern=='LooseCurls' && props.porosity == 'MediumToLowPorosity')){
    image = './images/icon-hair-mermaid.png';
    content = 'Water is your element!  With your natural strength and resilience, length comes easily to you.  It takes just the right mix of moisture and control to awaken and tame your inner waves.  Too much of either will weigh your hair down and hide its natural sheen.';
    if(props.curlPattern=='LooseCurls'){
      if(props.hairTexture == 'Fine')
        link = mermaidURLS[2];
      else if(props.hairTexture == 'medium')
        link = mermaidURLS[1];
      else 
        link = mermaidURLS[0];
    }else if(props.curlPattern == "StraightToWavy"){
      if(props.hairTexture == 'Fine')
        link = mermaidURLS[5];
      else if(props.hairTexture == 'medium')
        link = mermaidURLS[4];
      else 
        link = mermaidURLS[3];
    }
    hairType = 'The Mermaid™/Merman™';
  }else if(props.curlPattern == 'TightCurls' && props.porosity == 'MediumToHighPorosity'){
    // if curlPattern = Tight Curls && Porosity == MediumToHighPorosity : shape shifter
    image = './images/icon-hair-shapeshifter.png';
    content = 'Change is the only constant with this hair type!  Your tight curls are natural barometers that change with the weather and morph in appearance from wet to dry and in between washes.  Protect your hair from damage and help it look its best with rich moisturizers, strong definers and shine-enhancing sealants.  ';

    if(props.curlShape == 'singleStrand'){
      link = shapeShifterURLS[2];
    }else if(props.curlShape == 'spiral')
      link = shapeShifterURLS[1];
    else
      link = shapeShifterURLS[0];

    hairType = 'The Shape Shifter™';
  }else if((props.curlPattern == 'StraightToWavy' && props.porosity == 'MediumToHighPorosity') ||(props.curlPattern=='LooseCurls' && props.porosity == 'MediumToLowPorosity')){
    // if curlPattern = StraightToWavy && Porosity == MediumToHighPorosity : cotton candy
    // if curlPattern = LooseCurls && Porosity == MediumToLowPorosity : cotton candy
    image = './images/icon-hair-cotton-candy.png';
    content = 'Your hair is like spun sugar that can rise to great heights or melt away in the blink of an eye. Your delicate, changeable waves and loose curls are easily damaged and thrive with a light touch.  Keep your hair healthy, strong, and buoyant with rich moisturizers and lightweight definers and sealers.';
    if(props.curlPattern=='LooseCurls'){
      if(props.hairTexture == 'Fine')
        link = cottonCandyURLS[0];
      else if(props.hairTexture == 'medium')
        link = cottonCandyURLS[1];
      else 
        link = cottonCandyURLS[2];
    }else if(props.curlPattern == "StraightToWavy"){
      if(props.hairTexture == 'Fine')
        link = cottonCandyURLS[5];
      else if(props.hairTexture == 'medium')
        link = cottonCandyURLS[4];
      else 
        link = mermacottonCandyURLSidURLS[3];
    }
    hairType = 'The Cotton Candy Dream™';
  }else{
    image = './images/icon-hair-warrior-queen.png';
    content = 'Your tight curls have a mind of their own and the strength to withstand whatever comes their way.    Selective in its tastes, your hair won’t absorb what doesn’t suit it.  It takes just the right mix of products to reveal the velvety sheen and softness that lie within.';

    if(props.curlShape == 'singleStrand'){
      link = warriorURLS[2];
    }else if(props.curlShape == 'spiral')
      link = warriorURLS[1];
    else
      link = warriorURLS[0];

    hairType = 'The Warrior Queen™/Warrior King™';
  }
  console.log(`Your registration detail: \n 
    curlPattern: ${props.curlPattern} \n 
    porosity: ${props.porosity} \n
    curlShape: ${props.curlShape} \n
    hairTexture: ${props.hairTexture}\n
    scalpCondition: ${props.scalpCondition} \n
    stylingPreference: ${props.stylingPreference} \n`
  )
    
  return(
    <React.Fragment>

<div className="form-group form-slide form-slide--seven">
        <img src="./images/Shape-Shifter-Back-2.png" />
      <div class="content-container">
      <img class="form-slide__icon" src={`${image}`} />
        <h3>Your Hair Type Personality™ is</h3>
      <h2 class="form-slide__headline">{`${hairType}`}</h2>
      <div class="copy form-slide__body">
        {`${content}`}
      </div> 

      <div class="form-slide__inputs">
        <label class="form-slide__label" htmlFor="email">Email</label>
        <input
          className="form-control form-slide__control"
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
        <img src="./images/Get-Clean-Back-2.png" />   
    </div>
      <a href={`${link}`} className="btn btn-success btn-block form-slide__button form-slide__button--results">Get My Detailed Results!</a>
    </div>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))