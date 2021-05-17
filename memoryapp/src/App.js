import React, { Component } from "react";
import BeagleCard from "./components/BeagleCard";
import Wrapper from "./components/Wrapper";
import beagle from "./beagle.json";

export default class App extends Component {
    // Setting this.state.friends to the friends json array
    constructor(props) {
        super(props)
        this.state = {
            beagles: beagle,
            picked: [],
            score: 0,
            topScore: 0
        };
    }

    // componentDidMount() {
    //     axios.get("/tacos").then((data)=> {
    //         this.setState(data);
    //     });
    // }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    handlePicClick = (id) => {
        let topScore = this.state.topScore;
        let score = this.state.score;
        //shuffle
        const shuffled = this.shuffle(this.state.beagles);
        //updated picked
        let pickedArray = this.state.picked;
        //update score?
        if (pickedArray.includes(id)) {
            score = 0;
            pickedArray = [];
        } else {
            score++;
            pickedArray.push(id);
            if (this.state.topScore < score) {
                topScore = score;
            }
        }
        //set all the states at once
        this.setState({
            beagles: [...shuffled],
            picked: [...pickedArray],
            score: score,
            topScore: topScore
        });
    }

    render() {
        return (
            <Wrapper>

                <h4 className="score">Score: {this.state.score} | Top Score: {this.state.topScore}</h4>
                <div>
                    <div class="container">
                        <div class="row justify-content-md-center">

                                {this.state.beagles.map(beagle => (
                                    <BeagleCard
                                        id={beagle.id}
                                        key={beagle.id}
                                        image={beagle.image}
                                        handler={this.handlePicClick}
                                    />
                                ))};
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}








