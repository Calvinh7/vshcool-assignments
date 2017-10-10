import React from "react";

class App extends React.component {
    constructor() {
        super();
        this.state = {
            mariosLives: 0
        }
        this.gainALife = this.gainALife.bind(this);
        this.loseALife = this.loseALife.bind.(this);
    }

    gainALife() {
        this.setState(prevState => {
            return {
                mariosLives: prevState.mariosLives + 1
            }
        });
    }

    loseALife() {
        this.setState(prevState => {
            return {
                mariosLives: prevState.mariosLives - 1
            }
        });
    }
}
