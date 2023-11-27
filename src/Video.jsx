import ReactPlayer from "react-player";

const MyVideoComponent = () => {
    const url = "https://www.youtube.com/watch?v=iJfXv9cWwxk&ab_channel=BeautifulPiano";
    return (
        <div>
            <h2 className="text-gray-200">React-player</h2>
            <p className="text-gray-200 py-2">npm install react-player</p>
            <ReactPlayer 
                url={url}
                playing={false}
                volume={0.5}
            />
        </div>
    );
}

export default MyVideoComponent;