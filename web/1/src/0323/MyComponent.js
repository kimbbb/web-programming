class MyComponent extends Comment{
  static defaultProps = {
    name:'기본이름'
  };
  static propTypes={
    name:PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
  };
  render(){
    const {name, children, favoriteNumber}=props;
    return(
      <>
        안녕 내 이름은 {name}입니다.<br/>
        Children 이름은 {children}입니다.<br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </>
    );
  }
}

const MyComponent = props => {
  const {name, children, favoriteNumber}=props;
  return(
    <>
      안녕 내 이름은 {name}입니다.<br/>
      Children 이름은 {children}입니다.<br/>
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </>
  );
};

MyComponent.defaultProps={
  name:'기본이름'
};

MyComponent.propTypes={
  name:PropTypes.string,
  favoriteNumber:PropTypes.number.isRequired
};

