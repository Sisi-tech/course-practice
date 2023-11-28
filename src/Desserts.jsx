const DessertsList = (props) => {
    const sortedCalDesserts = props.data.filter((dessert)=> {
        return dessert.calories < 500;
    }).sort((a, b) => {
        return a.calories - b.calories;
    }).map((dessert) => {
        return (
            <li className="text-gray-200">
                - {dessert.name} - {dessert.calories} cal
            </li>
        );
    })
    
    return (
        <div>
            <ul>
                {sortedCalDesserts}
            </ul>
        </div>
    )
  }

  export default DessertsList;
  
