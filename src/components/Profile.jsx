import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  breed: React.PropTypes.string,
  dog: React.PropTypes.string,
  birthday: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDog: this.props.dog || '',
      localBreed: this.props.breed || '',
      localBday: this.props.birthday || '',
    };
    this.handleEditOfDog = this.handleEditOfDog.bind(this);
    this.handleEditOfBreed = this.handleEditOfBreed.bind(this);
    this.handleEditOfBday= this.handleEditOfBday.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localDog: nextProps.dog || '',
      localBreed: nextProps.breed || '',
      localBday: nextProps.birthday || '',
    });
  }
  handleEditOfDog(e) {
    const newDog = e.target.value;
    this.setState({
      localDog: newDog,
    });
  }
  handleEditOfBreed(e) {
    const newBreed = e.target.value;
    this.setState({
      localBreed: newBreed,
    });
  }
  handleEditOfBday(e) {
    const newBday = e.target.value;
    this.setState({
      localBday: newBday,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      dog: this.state.localDog,
      breed: this.state.localBreed,
      birthday: this.state.localBday,
    });
    this.setState({ saved: true });
    this.props.router.push('/');
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.dog === this.state.localDog &&
          this.props.breed === this.state.localBreed &&
          this.props.birthday === this.state.localBday;
  }
  render() {
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'}>
        <h1>Doggie Profile</h1>
          <form className="post-display" onSubmit={this.handleSubmit}>
            <div id="profile-form">
              <div>
                <input name="dog" onChange={this.handleEditOfDog} type="text" value={this.state.localDog} placeholder="Pup's Name" />
              </div>
              <div>
                <input name="breed" onChange={this.handleEditOfBreed} type="text" value={this.state.localBreed} placeholder="Breed" />
              </div>
              <div>
                <input name="birthday" onChange={this.handleEditOfBday} type="text" value={this.state.localBday} placeholder="Birthday/Gotcha Day" />
              </div>
              <button className="button" type="submit" value="Save" onClick={this.handleSubmit}>Submit</button>
            </div>
            {/* <div>
             {activeButton}
            </div> */}
          </form>
      </div>
    );
  }
}

Profile.propTypes = propTypes;

export default withRouter(Profile);












// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dog: '',
//       password: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     const stateObj = {};
//     const stateKey = e.target.name;
//     stateObj[stateKey] = e.target.value;
//     this.setState(stateObj);
//   }

//   handleSubmit() {
//     const { email, password } = this.state;
//     firebase.auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         console.log(err);
//       })
//       .then((user) => {
//         firebase.database().ref('users')
//           .child(user.uid)
//           .set({first_name: '', last_name: '', email: email})
//       })
//   }

//   render() {
    // return (
    //   <div>
    //     <h1>Doggie Profile</h1>
    //       <div id="profile-form">
    //         <div>
    //           <input name="dog" onChange={this.handleChange} type="text" placeholder="Pup's Name" />
    //         </div>
    //         <div>
    //           <input name="breed" onChange={this.handleChange} type="text" placeholder="Breed" />
    //         </div>
    //         <div>
    //           <input name="birthday/gotcha day" onChange={this.handleChange} type="text" placeholder="Birthday/Gotcha Day" />
    //         </div>
    //         <button className="button" onClick={this.handleSubmit}>Submit</button>
    //       </div>
    //   </div>
    // )
//   };
// }
