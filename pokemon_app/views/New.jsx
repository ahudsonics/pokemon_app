const React = require('react');

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Send a POST request to create a new Pokemon using the form data (this.state.name and this.state.img).
    // Handle form submission logic here.
  };

  render() {
    return (
      <div>
        <h1>Create a New Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Create Pokemon</button>
        </form>
      </div>
    );
  }
}

module.exports = New;
