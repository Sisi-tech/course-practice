// Parent component: 
function Dog() {
    return (
        <div>
            <h2 className="text-3xl text-blue-700 font-bold">Data Flow in React</h2>
            <h3 className="text-2xl py-1">Parent-chile data flow</h3>
            <p className="py-2 " style={{width: "500px"}}>A React app consists of many components, organized as a component tree. The data flows from the root component to all the components in the tree structure that require this data, using props.</p>
            <p>Practice:</p>
            <Puppy name="Max" bowlShape="square" bowlStatus="full" />
        </div>
    );
}
// Chile component:
function Puppy(props) {
    return(
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
}
// Chile component:
function Bowl(props) {
    return(
        <span>
            {props.bowlShape} - shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
}

export default Dog;