import React, { Component } from 'react';
import HeadComponent from './HeadComponent';
import MenuComponent from './MenuComponent';
import GameComponent from './GameComponent';
import AboutComponent from './AboutusComponent';
import DishDetail from './DishDetail';
import GameDetail from './GameDetails';
import { Route, Switch,Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { GAMES } from '../shared/game';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes:DISHES,
            games:GAMES,
        }
    }
    render(){
        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    // comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };
        const GameWithId = ({ match }) => {
            return (
                <GameDetail
                    game={this.state.games.filter((game) => game.id === parseInt(match.params.gameId, 10))[0]}
                    // comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };
        return(
            <div>
                <HeadComponent />
                <Switch>
                    <Route exact path='/menu' component={() => <MenuComponent dishes={this.state.dishes}/>} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/game' component={() => <GameComponent games={this.state.games}/>} />
                    <Route path='/game/:gameId' component={GameWithId} />
                    <Route path='/aboutus' component={AboutComponent} />
                    <Redirect to='/menu'/>
                </Switch>
            </div>
        )
    }
}
export default Main;