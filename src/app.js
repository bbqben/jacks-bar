import React from 'react';
import ReactDOM from 'react-dom';
//Imported Helpers
import firebase from 'firebase';
import firebaseConfig from "./components/helper/firebaseConfig";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);

        this.getFBItem(
            "items",
            (items) => {
                // console.log(items)
                let newState = [];
                for (let item in items) {
                    newState.push({
                        id: item,
                        title: items[item].title,
                    });
                }
                console.log(newState);
                this.setState({items: newState})
            }
        )
    }



    render() {
        return (
            <div>
                <h1>List of Notes:</h1>
                <ul>
                    {
                    this.state.items.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <p>{item.title}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    } 

    getFBItem(item, callBack) {
        const itemsRef = firebase.database().ref(item)
        itemsRef.on('value', (snapshot) => {
            callBack(snapshot.val());
        });
    }
} 

ReactDOM.render(<App />, document.getElementById('app'));