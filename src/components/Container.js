
const Container = props =>{
  console.log('props',props);

  return(
    <div>{props.info.name} - {props.info.age}</div>
  );
}


export default Container;