import React, { Component } from 'react';
import DISHES from '../../Dish';
import COMMENTS from '../../Comments';
import DishDtl from './DishDtl';
import MenuItem from './MenuItem';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps=state=>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

class Menu extends Component {
    state = {

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
        document.title="Menu"
        const menu = this.props.dishes.map((dish) => {
            return <MenuItem dish={dish} onselectdish={this.onselectdish} key={dish.id} />;
        });
   
        let dishdtl = this.state.selecteddish ? <DishDtl selecteddish dish={this.state.selecteddish} /> : null;

        if (this.state.selecteddish != null) {
            const comments = this.props.comments.filter(comments => comments.dishId === this.state.selecteddish.id
            )
            dishdtl = <DishDtl
                dish={this.state.selecteddish}
                comments={comments} />
        }
        return (
            <div className='container' >
                <div className='row'>
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>{dishdtl}</ModalBody>
                    <ModalFooter><Button onClick={this.toggleModal}>Close</Button></ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Menu);
