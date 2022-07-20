import React, { Component } from 'react';
import HeadComponent from './HeadComponent';
import HomeComponent from './HomeComponent';
import GameComponent from './GameComponent';
import FeedbackComponent from './FeedbackComponent';
import SubjectDetail from './SubjectDetail';
import GameDetail from './GameDetails';
import ChickenComponent from './ChickendComponent';
import FooterComponent from './FooterComponent';
import { Route, Switch,Redirect, withRouter } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { GAMES } from '../shared/game';
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        games:state.games
    }
}
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
                <SubjectDetail
                    dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                />
            );
        };
        const GameWithId = ({ match }) => {
            return (
                <GameDetail
                    game={this.props.games.filter((game) => game.id === parseInt(match.params.gameId, 10))[0]}
                />
            );
        };
        return(
            <div>
                <HeadComponent />
                <Switch>
                    <Route exact path='/home' component={() => <HomeComponent dishes={this.props.dishes}/>} />
                    <Route path='/home/:dishId' component={DishWithId} />
                    <Route exact path='/game' component={() => <GameComponent games={this.props.games}/>} />
                    <Route path='/game/:gameId' component={GameWithId} />
                    <Route path='/feedback' component={FeedbackComponent} />
                    <Route path='/chicken' component={ChickenComponent} />
                    <Redirect to='/home'/>
                </Switch>
                <FooterComponent />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps)(Main));