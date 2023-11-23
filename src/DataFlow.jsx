// Parent component: 
function Dog() {
    return (
        <div className="min-w-screen flex flex-col text-center justify-center text-gray-100">
            <h2 className="text-3xl text-blue-700">Data Flow in React</h2>
            <h3 className="text-2xl py-1">Parent-chile data flow</h3>
            <p className="py-2 w-1/2 mx-auto">A React app consists of many components, organized as a component tree. The data flows from the root component to all the components in the tree structure that require this data, using props.</p>
            <h2 className="text-blue-700" style={{textDecoration: 'underline'}}>Practice - props</h2>
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