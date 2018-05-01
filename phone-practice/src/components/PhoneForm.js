import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    const { name, phone } = this.state;
    const { keyword, onSearch } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          placeholder="전화번호"
          name="phone"
          onChange={this.handleChange}
          value={phone}
        />
        <div>
          <button>제출</button>
        </div>

        <div>
          <input
            onChange={onSearch}
            value={keyword}
            placeholder="검색할 이름을 입력하세요"
          />
          {this.props.keyword}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
