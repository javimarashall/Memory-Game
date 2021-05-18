# Memory-Game

## Summary 
This software contains an application called, Welcome to the Beagle Memory Game. When this application loads, the user is presented with a landing page containing 12 beagle cards of Jax and Juniper. The purpose of the application is a memory game, the user clicks on a beagle card and the cards shuffle when clicked. If the user clicks on a card that has not been clicked on, the user gets a point and it's displayed on top of the page. The user may keep on clicking on other cards until every card has been clicked, total of 12 cards. If the user clicks on a card that has already been clicked on, then the user has lost and the score is reset to 0. The top score will remain in place until the page is refreshed or the user beats the previous high scores.

## Site
![Site](./memoryapp/assets/site.gif)

## Code Snippet


```javascript
<Wrapper>
    <h4 className="score">Score: {this.state.score}  | Top Score: {this.state.topScore} </h4>
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
                ))}
            </div>
        </div>
    </div>
</Wrapper>
```
