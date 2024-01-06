import React, { Component } from 'react';
import DISHES from '../../Dish';
import DishDtl from './DishDtl';
import MenuItem from './MenuItem';
import { CardColumns, Modal } from 'reactstrap';


class Menu extends Component {
    state = {
        dishes: DISHES,
        selecteddish: null,
        modalOpen: false

    }
    onselectdish = (dish) => {
        this.setState({
            selecteddish: dish,
            modalOpen: true
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }


    render() {
        const menu = this.state.dishes.map((dish) => {
            return <MenuItem dish={dish} onselectdish={this.onselectdish} key={dish.id} />;
        });

        const dishdtl = this.state.selecteddish ? <DishDtl selecteddish dish={this.state.selecteddish} /> : null;
        return (
            <div className='container' >
                <div className='row'>
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>{dishdtl}</Modal>
                </div>
            </div>
        );
    }

}

export default Menu;
