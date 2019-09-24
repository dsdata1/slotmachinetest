

class App extends React.Component {

    render() {
        const s = ["❤", "👍", "😁"];
        //generate random number from 1 to 3
        let sNum = () => (Math.floor(Math.random() * 3));
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine s1={s[sNum()]} s2={s[sNum()]} s3={s[sNum()]} />
                <Machine s1="❤" s2="👍" s3="👍" />
                <Machine s1="👍" s2="👍" s3="👍" />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));