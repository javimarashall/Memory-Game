import React, { Component } from "react";
import BeagleCard from "./components/BeagleCard";
import Wrapper from "./components/Wrapper";
import beagle from "./beagle.json";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        beagles: beagles
    };







    render() {
        return (
            <Wrapper>
                <Title>Two Beagles</Title>
                {this.state.beagles.map(beagle => (
                    <FriendCard
                        //removeFriend={this.removeFriend}
                        id={beagle.id}
                        key={beagle.id} 
                        image={beagle.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;







}