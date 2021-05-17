function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  const style = {
    color : 'green',
    fontSize : 'x-large',
    listStyle : 'square',
  }

  return (
    <div>
      <h1 style={{color: "red"}}>CityList</h1>

      <ul style={style}>
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
