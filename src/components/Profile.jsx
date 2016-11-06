import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  image: React.PropTypes.func,
  breed: React.PropTypes.string,
  dog: React.PropTypes.string,
  birthday: React.PropTypes.string,
  social: React.PropTypes.string,
  tags: React.PropTypes.string,
  caption: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localImage: this.props.image || '',
      localDog: this.props.dog || '',
      localBreed: this.props.breed || '',
      localBday: this.props.birthday || '',
      localSocial: this.props.social || '',
      localTags: this.props.tags || '',
      localCaption: this.props.caption || '',
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleEditOfDog = this.handleEditOfDog.bind(this);
    this.handleEditOfBreed = this.handleEditOfBreed.bind(this);
    this.handleEditOfBday = this.handleEditOfBday.bind(this);
    this.handleEditOfSocial = this.handleEditOfSocial.bind(this);
    this.handleEditOfTags = this.handleEditOfTags.bind(this);
    this.handleEditOfCaption = this.handleEditOfCaption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localImage: nextProps.image || '',
      localDog: nextProps.dog || '',
      localBreed: nextProps.breed || '',
      localBday: nextProps.birthday || '',
      localSocial: nextProps.social || '',
      localTags: nextProps.tags || '',
      localCaption: nextProps.caption || '',
    });
  }
  handleImageChange(e) {
    const newImage = e.target.value;
    this.setState({
      localImage: newImage,
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
  handleEditOfSocial(e) {
    const newSocial = e.target.value;
    this.setState({
      localSocial: newSocial,
    });
  }
  handleEditOfTags(e) {
    const newTags = e.target.value;
    this.setState({
      localTags: newTags,
    });
  }
  handleEditOfCaption(e) {
    const newCaption = e.target.value;
    this.setState({
      localCaption: newCaption,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      image: this.state.localImage,
      dog: this.state.localDog,
      breed: this.state.localBreed,
      birthday: this.state.localBday,
      social: this.state.localSocial,
      tags: this.state.localTags,
      caption: this.state.localCaption,
    });
    this.setState({ saved: true });
    this.props.router.push('/');
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.image === this.state.localImage &&
           this.props.dog === this.state.localDog &&
           this.props.breed === this.state.localBreed &&
           this.props.birthday === this.state.localBday &&
           this.props.social === this.state.localSocial &&
           this.props.tags === this.state.localTags &&
           this.props.caption === this.state.localCaption;
  }
  render() {
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'}>
        <h1>Doggie Profile</h1>
          <form className="post-display" onSubmit={this.handleSubmit}>
            <div id="profile-form">
              <div>
                <input name="photo" type="file" value={this.state.url}
                onChange={this.handleImageChange} />
              </div>
              <div>
                <input name="dog" onChange={this.handleEditOfDog} type="text" value={this.state.localDog} placeholder="Pup's Name" />
              </div>
              <div>
                <input name="breed" onChange={this.handleEditOfBreed} type="text" value={this.state.localBreed} placeholder="Breed" />
              </div>
              <div>
                <input name="birthday" onChange={this.handleEditOfBday} type="text" value={this.state.localBday} placeholder="Birthday/Gotcha Day" />
              </div>
              <div>
                <input name="social" onChange={this.handleEditOfSocial} type="text"
                value={this.state.localSocial} placeholder="Social Media Handle" />
              </div>
              <div>
                <input className="caption" name="tags" onChange={this.handleEditOfTags} type="text" value={this.state.localTags} placeholder="Tags" />
              </div>
              <div>
                <input className="caption" name="caption" onChange={this.handleEditOfCaption} type="text" value={this.state.localCaption} placeholder="Photo Caption" />
              </div>
              <button className="button" type="submit" value="Save" onClick={this.handleSubmit}>Submit</button>
            </div>
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
