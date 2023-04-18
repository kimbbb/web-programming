import React,{Component} from "react";

class EventPractice extends Component{
  state={
    username:'',
    message:''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  };

  handleChange=()=>{
    alert(this.state.username+':'+this.state.message);
    this.setState({
      username:'',
      message:''
    });
  };
  handelKeyPress = e => {
    if(e.key === 'Enter'){
      this.handelClick();
    }
  };
  render(){
    return(
      <>
      <h1>이벤트 연습</h1>
      <input
      type='text'
      name='username'
      placeholder="유저명"
      value={this.state.username}
      onChange={this.handleChange}
      />
  
      <input type='text' name="message" placeholder="아무거나 입력하셈" value={this.state.message} onChange={this.handleChange} onKeyPress={hendleKeyPress}/>
      <button onclick={onClick}>확인</button>
      </>
    )
  }
}

export default EventPractice;